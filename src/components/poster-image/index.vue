<script lang="ts">
import Vue from 'vue'
import { InjectCxtToHandler } from '../../canvas'
import drawImage from './image'

export default Vue.extend({
  name: 'poster-image',
  inject: [ 'posterVM' ],
  props: {
    width: Number,
    height: Number,
    offsetY: Number,
    offsetX: Number,
    round: {
      type: Boolean,
      default: false
    },
    src: String,
    cors: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    const handler: InjectCxtToHandler = canvas => drawImage({
      width: this.width,
      height: this.height,
      offsetX: this.offsetX,
      offsetY: this.offsetY,
      round: this.round,
      src: this.src,
      cors: this.cors
    }, canvas)

    this.posterVM.$emit('on-element-mounted', handler)
  },
  render(h) {
    return h()
  }
})
</script>