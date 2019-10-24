<script lang="ts">
import Vue from 'vue'
import { dispatch } from '../../../helper/emitter'
import drawImage from './image'


export default Vue.extend({
  name: 'poster-image',
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
    dispatch(this, 'poster', 'on-poster-element-mounted', (canvas, context) => drawImage({
      width: this.width,
      height: this.height,
      offsetX: this.offsetX,
      offsetY: this.offsetY,
      src: this.src,
      cors: this.cors
    }, canvas, context))
  },
  render(h) {
    return h()
  }
})
</script>