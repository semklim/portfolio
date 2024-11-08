import react from '@vitejs/plugin-react';
import crypto from 'crypto';
import path from 'path';
import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

const styles = 'https://semklim.vercel.app https://fonts.googleapis.com';
const scripts = 'https://semklim.vercel.app';
const fonts = 'https://fonts.googleapis.com https://fonts.gstatic.com';

function generateNonce() {
  return crypto.randomBytes(16).toString('base64');
}

const nonce = {
  style: generateNonce(),
  script: generateNonce(),
};

export default defineConfig({
  plugins: [
    svgr(),
    tsconfigPaths(),
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          nonce: `"default-src 'self'; base-uri 'self' ${scripts}; script-src 'self' 'nonce-${nonce.script}' http: 'strict-dynamic' https://cdn.jsdelivr.net; style-src 'self' ${styles} 'unsafe-inline' http:; script-src-elem 'self' ${scripts} https://cdn.jsdelivr.net http:; font-src 'self' ${fonts}; img-src 'self' data: http:; connect-src https://api.emailjs.com/api/v1.0/email/send-form;"`,
        },
      },
    }),
  ],
  define: {
    BASE_URL: JSON.stringify('http://localhost::3000'),
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
