import Vue from 'vue'
import Poster from './components/poster.vue'
import PosterImage from './components/poster-image.vue'
import PosterText from './components/poster-text.vue'
import PosterLoading from './components/poster-loading.vue'

export {
  Poster,
  PosterImage,
  PosterText,
  PosterLoading
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('poster', Poster)
  Vue.component('poster-image', PosterImage)
  Vue.component('poster-text', PosterText)
  Vue.component('poster-loading', PosterLoading)
}
