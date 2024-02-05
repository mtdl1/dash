import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import tailwind from "tailwindcss"
import autoprefixer from "autoprefixer"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  // resolve: {
  //   alias: {
  //     '@': '/src',
  //     '@components': '/src/components',
  //     '@views': '/src/views',
  //     '@assets': '/src/assets',
  //     '@router': '/src/router',
  //     '@store': '/src/store',
  //     '@utils': '/src/utils',
  //     '@api': '/src/api',
  //     '@styles': '/src/styles',
  //   },
  // },
})
