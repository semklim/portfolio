import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), tsconfigPaths(), react()],
  define: {
    __URL__: JSON.stringify('http://localhost::3000'),
    __PORT__: 3000,
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    open: true,
    port: 3000,
  },
  build: {
    manifest: true,
    outDir: './dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js',

        assetFileNames: ({ name }) => {
          
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
            return 'assets/images/[name].[hash][extname]';
          }
          if (/\.(mp4|mkv|m3u8|ts|mov|flv)$/.test(name ?? '')) {
            return 'assets/video/[name].[hash][extname]';
          }

          if (/\.css$/.test(name ?? '')) {
            return 'style/[name].[hash][extname]';
          }

          return 'assets/[name].[hash][extname]';
        },
      },
    },
  },
});


