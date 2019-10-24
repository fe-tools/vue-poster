import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

const builds = {
  'index': {
    path: 'src/index.ts',
    name: 'VuePoster'
  },
  'poster': {
    path: 'src/components/poster/index.ts',
    name: 'VuePoster'
  },
  'poster-loading': {
    path: 'src/components/poster-loading/index.ts',
    name: 'VuePosterLoading'
  },
  'poster-image': {
    path: 'src/components/poster-image/index.ts',
    name: 'VuePosterImage'
  },
  'poster-text': {
    path: 'src/components/poster-text/index.ts',
    name: 'VuePosterText'
  }
}

const genConfig = (dist, { path, name }) => {
  return {
    input: path,
    output: [
      {
        file: `lib/${dist}.js`,
        name: name,
        format: 'umd',
        globals: {
          vue: 'Vue'
        }
      }
    ],
    external: [ 'vue' ],
    plugins: [
      commonjs(),
      resolve(),
      typescript({
        objectHashIgnoreUnknownHack: true,
        useTsconfigDeclarationDir: true
      }),
      vue({
        needMap: false
      }),
      terser({
        sourcemap: false
      })
    ]
  }
}

const buildConfig = Object.keys(builds).map(key => genConfig(key, builds[key]))

export default buildConfig
