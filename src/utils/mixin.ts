import Vue, { ComponentOptions } from 'vue'
import event from './event'

export const PluginMixin = (element: string): ComponentOptions<Vue> => {
  return {
    mounted() {
      event.emit('mounted', {
        type: element,
        vm: this
      })
    },
    destroyed() {
      event.emit('unmounted', {
        type: element,
        vm: this
      })
    }
  }
}