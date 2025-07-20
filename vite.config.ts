import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { configDefaults } from 'vitest/config'

// https://vite.dev/config/
export default defineConfig({
  base:'vue-3-fsd',
  css: {
    devSourcemap: true,
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'dist/**', 'coverage/**'],
  },
})
