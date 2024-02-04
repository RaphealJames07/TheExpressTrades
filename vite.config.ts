// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/https://theexpresstrades.com/', // Set your base URL if hosting in a subdirectory
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory for the production build
    assetsDir: '', // Set to an empty string to place assets directly in outDir
    sourcemap: false, // Disable sourcemaps in production
  },
});
