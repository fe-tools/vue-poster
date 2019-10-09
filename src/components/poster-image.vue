<script lang="ts">
import Vue from 'vue'
import { PluginMixin } from '../utils/mixin'

export default Vue.extend({
  name: 'vue-poster-image',
  mixins: [ PluginMixin('image') ],
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
  render(h) {
    return h()
  }
})
</script>