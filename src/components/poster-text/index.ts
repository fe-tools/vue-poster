import Vue from 'vue'
import PosterText from './src/main.vue'

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('poster-text', PosterText)
}

export default PosterText