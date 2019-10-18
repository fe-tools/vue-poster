import Vue from 'vue'
import Poster from './packages/poster/'
import PosterImage from './packages/poster-image/'
import PosterText from './packages/poster-text'
import PosterLoading from './packages/poster-loading'

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
