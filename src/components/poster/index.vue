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
  <slot></slot>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Loading from '../poster-loading/index.vue'

import {
  canvas,
  initCanvas,
  canvasToDataURL,
  ElementHandler,
  InjectCxtToHandler
} from '../../canvas'

export default Vue.extend({
  name: 'poster',
  provide() {
    return {
      posterVM: this
    }
  },
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
    addElementToQueue(handler: ElementHandler) {
      this.elements.push(handler)
    },
    drawPoster() {
      this.imageDate = canvasToDataURL(this.type, this.quality)
      this.$emit('on-render', this.imageDate)
    }
  },
  watch: {
    async elements(handlers: InjectCxtToHandler[]) {
      for (let i = 0; i < handlers.length; i++) {
        await handlers[i](canvas)
      }
      this.drawPoster()
    }
  },
  created() {
    this.$on('on-element-mounted', this.addElementToQueue)
  },
  mounted() {
    initCanvas({
      width: this.width,
      height: this.height,
      ratio: this.ratio,
      backgroundColor: this.backgroundColor
    })
  }
})
</script>
