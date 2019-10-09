<script lang="ts">
import Vue from 'vue'
import { PluginMixin } from '../utils/mixin'

export default Vue.extend({
  name: 'vue-poster-text',
  mixins: [
    PluginMixin('text')
  ],
  props: {
    width: Number,
    height: Number,
    offsetY: Number,
    offsetX: Number,
    color: String,
    font: String
  },
  render(h) {
    return h()
  }
})
</script>