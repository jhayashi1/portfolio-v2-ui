import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        react(),
    ],
    build: {
        rollupOptions: {
            input: {
                app: './src/index.html',
            },
        },
    },
    server: {
        open: './src/index.html',
    },
});