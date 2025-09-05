import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { sitemap } from 'vite-plugin-sitemap'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    sitemap({
      hostname: 'https://familypsychiatrists.org', // Update with actual domain
      routes: [
        '/',
        '/about',
        '/resources',
        '/resources/listserv',
        '/resources/award-recognition',
        '/resources/family-treatment',
        '/resources/articles',
        '/resources/web',
        '/resources/child-adolescent',
        '/resources/child-adolescent/aacap',
        '/resources/child-adolescent/family-centered',
        '/resources/couples-adults',
        '/resources/couples-adults/psychiatric-resources',
        '/resources/couples-adults/books',
        '/resources/culture-family',
        '/resources/culture-family/resources',
        '/resources/culture-family/cultural-anthropology',
        '/resources/training',
        '/resources/training/curriculum-in-adult-psychiatric-residency-training',
        '/resources/training/training-programs-in-family-psychiatry',
        '/members',
        '/events',
        '/contact',
        '/membership'
      ],
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
      readable: true
    })
  ],
  base: "/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@views': path.resolve(__dirname, './src/views'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@data': path.resolve(__dirname, './src/data'),
    }
  },
  ssgOptions: {
    script: 'async',
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          utils: ['pinia']
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
})
