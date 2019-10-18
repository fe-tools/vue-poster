<script lang="ts">
import Vue from 'vue'
import { dispatch } from '../../../utils/emitter'
import drawImage from './image'


export default Vue.extend({
  name: 'vue-poster-image',
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
    dispatch(this, 'vue-poster', 'on-poster-element-mounted', () => drawImage({
      width: this.width,
      height: this.height,
      offsetX: this.offsetX,
      offsetY: this.offsetY,
      src: this.src,
      cors: this.cors
    }))
  },
  render(h) {
    return h()
  }
})
</script>