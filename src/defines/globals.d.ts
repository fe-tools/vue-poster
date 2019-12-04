import Vue, { VueConstructor } from 'vue'

declare global {
  interface Window {
    Vue: VueConstructor
  }
}

// vue provide & inject
declare module 'vue/types/vue' {
  interface Vue {
    posterVM: Vue
  }
}
