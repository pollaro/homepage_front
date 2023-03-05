import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const defaultConfig = {
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  envDir: '.',
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    const isDev = mode === 'development';
    return {
      ...defaultConfig,
      server: {
        proxy: {
          '/hbl/login': {
            target: isDev ? 'https://127.0.0.1:8000' : 'https://jimpollaro.com',
            changeOrigin: true,
            secure: false,
          },
        },
      },
    };
  } else {
    return defaultConfig;
  }
});
