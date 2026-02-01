import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        services: resolve(__dirname, 'services.html'),
        blog: resolve(__dirname, 'blog.html'),
        blogDetail: resolve(__dirname, 'blog-detail.html'),
        work: resolve(__dirname, 'work.html'),
        partner: resolve(__dirname, 'partner.html'),
        author: resolve(__dirname, 'author.html'),
        payment: resolve(__dirname, 'payment.html'),
        singlePost: resolve(__dirname, 'single-post.html'),
        maintenance: resolve(__dirname, 'maintenance.html'),
        errorPage: resolve(__dirname, '404.html'),
      },
    },
  },
})
