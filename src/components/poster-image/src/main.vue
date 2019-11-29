<script lang="ts">
import Vue from 'vue'
import { dispatch } from '../../../helper/emitter'
import drawImage from './image'

export default Vue.extend({
  name: 'poster-image',
  props: {
    width: [Number,String],
    height: [Number,String],
    offsetY: Number,
    offsetX: Number,
    src: String,
    cors: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    dispatch(this, canvas => drawImage({
      width: this.width as number | 'auto',
      height: this.height as number | 'auto',
      offsetX: this.offsetX,
      offsetY: this.offsetY,
      src: this.src,
      cors: this.cors
    }, canvas))
  },
  render(h) {
    return h()
  }
})
</script>