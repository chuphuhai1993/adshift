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
        partner: resolve(__dirname, 'partner.html'),
        author: resolve(__dirname, 'author.html'),
        contactUs: resolve(__dirname, 'contact-us.html'),
        caseStudy: resolve(__dirname, 'case-study.html'),
        caseStudyDetail: resolve(__dirname, 'case-study-detail.html'),
        singlePost: resolve(__dirname, 'single-post.html'),
        maintenance: resolve(__dirname, 'maintenance.html'),
        errorPage: resolve(__dirname, '404.html'),
        payment: resolve(__dirname, 'payment.html'),
        paymentStep1: resolve(__dirname, 'payment-step1.html'),
        paymentStep2: resolve(__dirname, 'payment-step2.html'),
        paymentStep3: resolve(__dirname, 'payment-step3.html'),
        paymentDone: resolve(__dirname, 'payment-done.html'),
        referral: resolve(__dirname, 'referral.html'),
        request: resolve(__dirname, 'request.html'),
      },
    },
  },
})
