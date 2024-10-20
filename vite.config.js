import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';
export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    build: {
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes('node_modules')) {
                return id.toString().split('node_modules/')[1].split('/')[0].toString();
              }
            }
          }
        },
        chunkSizeWarningLimit: 1000 // Adjust this limit if needed
      },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '#utils' : path.resolve(__dirname,'resources/js/utils'),
            '#helpers': path.resolve(__dirname,'resources/js/utils/helpers.js')
        },
    },
});
