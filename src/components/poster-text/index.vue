<script lang="ts">
import Vue from 'vue'
import { CanvasContext } from '../../canvas'
import drawText from './text'

export default Vue.extend({
  name: 'poster-text',
  inject: [ 'posterVM' ],
  props: {
    width: Number,
    height: Number,
    offsetY: Number,
    offsetX: Number,
    color: String,
    font: String,
    lineHeight: Number,
    border: Boolean
  },
  mounted() {
    this.posterVM.$emit(
      'on-element-mounted',
      (canvas: CanvasContext) => drawText({
        width: this.width,
        height: this.height,
        offsetX: this.offsetX,
        offsetY: this.offsetY,
        color: this.color,
        font: this.font,
        lineHeight: this.lineHeight,
        vnodes: this.$slots.default,
        border: this.border
      }, canvas)
    )
  },
  render(h) {
    return h()
  }
})
</script>