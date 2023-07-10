import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import VueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(), VueJsx()],
  build: {
    lib: {
      entry: path.resolve(__dirname, './index.js'),
      name: 'p-ui',
      fileName: (format) => `p-ui.${format}.js`
    },
    outDir: path.resolve(__dirname, '../../lib'),
    rollupOptions: {
      external: ['vue', 'element-plus', '@element-plus/icons-vue', '@vueup/vue-quill', 'echarts'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
