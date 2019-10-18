<template>
<div class="v-poster-wrapper">
  <img
    v-if="imageDate"
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
import Loading from '../../poster-loading/'

import { createCanvas, canvasToDataURL } from '../../../utils/canvas'
import { ElementHandler } from '../../../utils/type'

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
      elements: [] as ElementHandler[],
      imageDate: ''
    }
  },
  components: { Loading },
  methods: {
    drawPoster() {
      this.imageDate = canvasToDataURL(this.type, this.quality)
    }
  },
  watch: {
    async elements(handlers: Array<() => ElementHandler>) {
      for (let i = 0; i < handlers.length; i++) {
        await handlers[i]()
      }
      this.drawPoster()
    }
  },
  created() {
    this.$on('on-poster-element-mounted', (handler: ElementHandler) => {
      this.elements.push(handler)
    })
  },
  mounted() {
    createCanvas({
      width: this.width,
      height: this.height,
      ratio: this.ratio,
      backgroundColor: this.backgroundColor
    })
  }
})
</script>
