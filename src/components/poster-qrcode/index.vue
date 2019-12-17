<script lang="ts">
import Vue from 'vue'
import { InjectCxtToHandler } from '../../canvas'
import drawQRCode from './qrcode'

export default Vue.extend({
  name: 'poster-qrcode',
  inject: [ 'posterVM' ],
  props: {
    width: Number,
    height: Number,
    offsetY: Number,
    offsetX: Number,
    margin: Number,
    text: String
  },
  mounted() {
    const handler: InjectCxtToHandler = canvas => drawQRCode({
      width: this.width,
      height: this.height,
      offsetX: this.offsetX,
      offsetY: this.offsetY,
      margin: this.margin,
      text: this.text
    }, canvas)

    this.posterVM.$emit('on-element-mounted', handler)
  },
  render(h) {
    return h()
  }
})
</script>