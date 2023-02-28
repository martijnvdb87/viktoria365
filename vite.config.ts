import { defineConfig } from 'vite'
import path, { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        languageSelector: resolve(__dirname, 'index.html'),
        dutchHome: resolve(__dirname, 'nl/index.html'),
        dutchAbout: resolve(__dirname, 'nl/over-mij/index.html'),
        hungarianHome: resolve(__dirname, 'hu/index.html'),
        hungarianAbout: resolve(__dirname, 'hu/rolam/index.html'),
        englishHome: resolve(__dirname, 'en/index.html'),
        englishAbout: resolve(__dirname, 'en/about-me/index.html'),
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src'),
    },
  },
})