<script lang="ts">
import Vue from 'vue'
import { CanvasContext } from '../../../canvas'
import drawQRCode from './qrcode'

export default Vue.extend({
  name: 'poster-qrcode',
  inject: [ 'posterVM' ],
  props: {
    width: [ Number, String ],
    height: [ Number, String ],
    offsetY: Number,
    offsetX: Number,
    margin: Number,
    text: String
  },
  mounted() {
    this.posterVM.$emit(
      'on-element-mounted',
      (canvas: CanvasContext) => drawQRCode({
        width: this.width as number | 'auto',
        height: this.height as number | 'auto',
        offsetX: this.offsetX,
        offsetY: this.offsetY,
        margin: this.margin,
        text: this.text
      }, canvas)
    )
  },
  render(h) {
    return h()
  }
})
</script>