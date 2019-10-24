import Vue from 'vue'
import PosterLoading from './src/main.vue'

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('poster-loading', PosterLoading)
}

export default PosterLoading