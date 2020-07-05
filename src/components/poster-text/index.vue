<script lang="ts">
import Vue from 'vue'
import { InjectCxtToHandler } from '../../canvas'
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
    textOffsetY: Number,
    textAlign: String,
    textBaseline: String,
    border: Boolean
  },
  mounted() {
    const handler: InjectCxtToHandler = canvas => drawText({
      width: this.width,
      height: this.height,
      offsetX: this.offsetX,
      offsetY: this.offsetY,
      color: this.color,
      font: this.font,
      lineHeight: this.lineHeight,
      textOffsetY: this.textOffsetY,
      textAlign: this.textAlign as CanvasTextAlign,
      textBaseline: this.textBaseline as CanvasTextBaseline,
      vnodes: this.$slots.default,
      border: this.border
    }, canvas)

    this.posterVM.$emit('on-element-mounted', handler)
  },
  render(h) {
    return h()
  }
})
</script>