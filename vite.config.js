import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: "/Kapilan747.github.io/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
});
