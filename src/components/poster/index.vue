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
  initCanvas,
  canvasToDataURL,
  CanvasContext,
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
      canvas: {} as CanvasContext,
      imageDate: ''
    }
  },
  components: { Loading },
  methods: {
    addElementToQueue(handler: ElementHandler) {
      this.elements.push(handler)
    },
    drawPoster() {
      this.imageDate = canvasToDataURL(this.canvas, this.type, this.quality)
      this.$emit('on-render', this.imageDate)
    }
  },
  watch: {
    async elements(handlers: InjectCxtToHandler[]) {
      for (let i = 0; i < handlers.length; i++) {
        await handlers[i](this.canvas)
      }
      this.drawPoster()
    }
  },
  created() {
    this.$on('on-element-mounted', this.addElementToQueue)
  },
  mounted() {
    this.canvas = initCanvas({
      width: this.width,
      height: this.height,
      ratio: this.ratio,
      backgroundColor: this.backgroundColor
    })
  }
})
</script>
