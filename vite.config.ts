import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['./test/**/*.test.{js,ts,tsx,jsx}'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});