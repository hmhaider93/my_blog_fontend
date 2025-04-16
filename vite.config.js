import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import fs from 'fs';

// Copy index.html to 404.html after build
function copy404Plugin() {
  return {
    name: 'copy-404',
    closeBundle() {
      const indexPath = resolve(__dirname, 'dist/index.html');
      const notFoundPath = resolve(__dirname, 'dist/404.html');
      fs.copyFileSync(indexPath, notFoundPath);
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copy404Plugin()],
  base: './', 
})
