<template>
<div class="v-poster-wrapper">
  <img
    v-if="isPosterDrwaCompleted"
    :src="imageDate"
    :class="posterClass"
  >

  <slot v-else name="loading">
    <Loading/>
  </slot>

  <slot name="default"></slot>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Loading from './poster-loading.vue'

import event from '../utils/event'

import { setCanvasProperty, canvasToDataURL } from '../core/canvas'

import drwaImage, { ImageComponent } from '../core/image'
import drwaText, { TextComponent } from '../core/text'

type Elements = {
  type: 'image',
  vm: ImageComponent
} | {
  type: 'text',
  vm: TextComponent
}

export default Vue.extend({
  name: 'vue-poster',
  props: {
    posterClass: String,
    width: Number,
    height: Number,
    ratio: Number,
    type: String,
    quality: Number,
    backgroundColor: String
  },
  data() {
    return {
      isPosterDrwaCompleted: false,
      elements: [] as Elements[],
      imageDate: ''
    }
  },
  components: {
    Loading
  },
  beforeMount() {
    event.on('mounted', (element: Elements) => this.elements.push(element))
  },
  async mounted() {
    setCanvasProperty({
      width: this.width,
      height: this.height,
      ratio: this.ratio,
      backgroundColor: this.backgroundColor
    })

    for (let index = 0; index < this.elements.length; index++) {
      const element = this.elements[index]

      if (element.type === 'image') {
        await drwaImage({
          src: element.vm.src,
          offsetX: element.vm.offsetX,
          offsetY: element.vm.offsetY,
          width: element.vm.width,
          height: element.vm.height,
          cors: element.vm.cors
        })
      } else if (element.type === 'text') {
        const text = element.vm.$slots.default![0].text || ''
        await drwaText({
          offsetX: element.vm.offsetX,
          offsetY: element.vm.offsetY,
          color: element.vm.color,
          text: text.trim(),
          font: element.vm.font
        })
      }
    }

    this.imageDate = canvasToDataURL(this.type, this.quality)

    this.isPosterDrwaCompleted = true
  }
})
</script>

<style>
.v-poster-wrapper {
  position: relative;
  display: flex;
}
</style>