import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import config from './config.json'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: config.prePath,
  server: {
    host: true,
    port: 5175,
  }
})
