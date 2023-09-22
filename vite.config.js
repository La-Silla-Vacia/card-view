import { defineConfig } from 'vite'


import react from '@vitejs/plugin-react-swc'
// export default defineConfig({
//   plugins: [react()],
// })

import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig({
  plugins: [react(),cssInjectedByJsPlugin()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/dinatar.js`,
        chunkFileNames: `assets/index-chunk.js`,
        assetFileNames: `assets/[name].[ext]`,
        manualChunks: undefined,
      },
    },
  },
});