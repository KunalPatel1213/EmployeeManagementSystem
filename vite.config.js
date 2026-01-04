import react from '@vitejs/plugin-react'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

export default {
  plugins: [
    react(),
    svelte(),
    tailwindcss()
  ],
  css: {
    transformer: 'postcss', // disable lightningcss duplicate transforms
  },
  optimizeDeps: {
    exclude: ['lightningcss'],
    dedupe: ['react', 'react-dom']
  },
  server: {
    fs: { strict: false }
  }
}
