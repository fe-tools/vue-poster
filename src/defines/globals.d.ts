import Vue, { VueConstructor } from 'vue'

declare global {
  interface Window {
    Vue: VueConstructor
  }
}

declare module 'vue/types/vue' {
  // component name
  interface VueConstructor {
    options?: {
      name?: string
    }
  }
  // vue provide & inject
  interface Vue {
    posterVM: Vue
  }
}
