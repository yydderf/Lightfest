import { defineConfig } from 'vite'
import postcssPresetEnv from "postcss-preset-env"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  css: {
    postcss: {
      plugins: [postcssPresetEnv()]
    }
  }
})
