import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true },// Включает карты кода SCSS для DevTools в режиме разработки
  base: '/', 
  }// Для Netlify оставляем стандартный слэш
)