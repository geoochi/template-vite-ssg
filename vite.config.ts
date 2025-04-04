import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'

export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/],
    }),
    Pages({
      extensions: ['vue'],
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/],
    }),
  ],
  ssgOptions: {
    script: 'async',
  },
})
