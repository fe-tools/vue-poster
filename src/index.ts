import { warn } from './helper/log'
export { default as Poster } from './components/poster'
export { default as PosterImage } from './components/poster-image'
export { default as PosterText } from './components/poster-text'
export { default as PosterLoading } from './components/poster-loading'

if (typeof window === 'undefined') {
  warn(
    `You are using a whole package,` + 
    `please use https://www.npmjs.com/package/babel-plugin-import to reduce app bundle size.`
  )
}
