<script lang="ts">
import Vue from 'vue'
import { CanvasContext } from '../../canvas'
import drawImage from './image'

export default Vue.extend({
  name: 'poster-image',
  inject: [ 'posterVM' ],
  props: {
    width: Number,
    height: Number,
    offsetY: Number,
    offsetX: Number,
    src: String,
    cors: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.posterVM.$emit(
      'on-element-mounted',
      (canvas: CanvasContext) => drawImage({
        width: this.width,
        height: this.height,
        offsetX: this.offsetX,
        offsetY: this.offsetY,
        src: this.src,
        cors: this.cors
      }, canvas)
    )
  },
  render(h) {
    return h()
  }
})
</script>