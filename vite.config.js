import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/note-taking-app/',
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
