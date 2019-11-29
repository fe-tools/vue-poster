<script lang="ts">
import Vue from 'vue'
import { dispatch } from '../../../helper/emitter'
import drawQRCode from './qrcode'

export default Vue.extend({
  name: 'poster-qrcode',
  props: {
    width: [ Number, String ],
    height: [ Number, String ],
    offsetY: Number,
    offsetX: Number,
    margin: Number,
    text: String
  },
  mounted() {
    dispatch(this, canvas => drawQRCode({
      width: this.width as number | 'auto',
      height: this.height as number | 'auto',
      offsetX: this.offsetX,
      offsetY: this.offsetY,
      margin: this.margin,
      text: this.text
    }, canvas))
  },
  render(h) {
    return h()
  }
})
</script>