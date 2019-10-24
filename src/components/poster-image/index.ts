import Vue from 'vue'
import PosterImage from './src/main.vue'

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('poster-image', PosterImage)
}

export default PosterImage