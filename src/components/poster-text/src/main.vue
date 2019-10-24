<script lang="ts">
import Vue from 'vue'
import { dispatch } from '../../../helper/emitter'
import drawText from './text'

export default Vue.extend({
  name: 'poster-text',
  props: {
    width: Number,
    height: Number,
    offsetY: Number,
    offsetX: Number,
    color: String,
    font: String
  },
  mounted() {
    const text = (this.$slots.default && this.$slots.default[0].text) || ''

    dispatch(this, 'poster', 'on-poster-element-mounted', canvas => drawText({
      offsetX: this.offsetX,
      offsetY: this.offsetY,
      color: this.color,
      font: this.font,
      text: text.trim()
    }, canvas))
  },
  render(h) {
    return h()
  }
})
</script>