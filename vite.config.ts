import {defineConfig} from 'vite';
import {hydrogen} from '@shopify/hydrogen/vite';

export default defineConfig({
  plugins: [hydrogen()],
  ssr: {
    noExternal: ['@remix-run/dev/server-build'],
    external: [
      'crypto',
      'fs',
      'fs/promises',
      'path',
      'os',
      'stream',
      'source-map-support',
      'cookie-signature',
      '@remix-run/node',
      '@remix-run/server-runtime',
    ],
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  build: {
    rollupOptions: {
      external: [
        'crypto',
        'fs',
        'fs/promises',
        'path',
        'os',
        'stream',
      ],
    },
  },
}); 