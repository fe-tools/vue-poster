import Vue from 'vue'
import Poster from './src/main.vue'

if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('poster', Poster)
}

export default Poster