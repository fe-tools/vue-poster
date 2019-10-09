import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

const extra = {
  globals: {vue: 'Vue'}
}

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/vue-poster.js', name: 'vuePoster', format: 'umd', ...extra },
    { file: 'dist/vue-poster.min.js', name: 'vuePoster', format: 'umd', ...extra },
    { file: 'dist/vue-poster.common.js', name: 'vuePoster', format: 'cjs', ...extra },
    { file: 'dist/vue-poster.esm.js', format: 'es', ...extra }
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
      sourcemap: false,
      include: [/^.+\.min\.js$/]
    })
  ]
}
