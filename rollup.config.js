import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

export default {
  input: {
    'index': 'src/index.ts',
    'poster': 'src/components/poster/index.ts',
    'poster-loading': 'src/components/poster-loading/index.ts',
    'poster-image': 'src/components/poster-image/index.ts',
    'poster-text': 'src/components/poster-text/index.ts',
    'poster-qrcode': 'src/components/poster-qrcode/index.ts',
  },
  output: [
    {
      dir: 'lib',
      format: 'esm',
      chunkFileNames: '[name].js',
      globals: {
        vue: 'Vue'
      }
    }
  ],
  external: [ 'vue' ],
  plugins: [
    commonjs(),
    resolve({
      preferBuiltins: true
    }),
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