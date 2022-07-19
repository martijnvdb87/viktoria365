import { defineConfig } from 'vite'
import path, { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        resume: resolve(__dirname, 'resume/index.html'),
        projects: resolve(__dirname, 'projects/index.html'),
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
    },
  },
})