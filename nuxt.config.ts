// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }],
      title: 'Tabarruk ziyorat',
    },
  },
  css: [
      '@/assets/styles/main.css',
      '@/assets/font/font.css'
  ],
  i18n: {
    locales: [
      { code: 'ru', iso: 'ru-RU' },
      { code: 'en', iso: 'en-EN' },
      { code: 'az', iso: 'az-AZ' },
      { code: 'hu', iso: 'hu-HU' },
      { code: 'kk', iso: 'kk-KK' },
      { code: 'tr', iso: 'tr-TR' },
      { code: 'tk', iso: 'tk-TK' },
      { code: 'uz', iso: 'uz-UZ' },
      { code: 'ky', iso: 'ky-KY' },
    ],
    defaultLocale: 'uz',
    vueI18n: {
      fallbackLocale: 'uz',
      silentTranslationWarn: true,
      missingWarn: false,
      fallbackWarn: false,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'locale',
      redirectOn: 'root', // recommended
      alwaysRedirect: true,
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
    '@nuxtjs/i18n',
  ],
  robots: {
    rules: {
      UserAgent: '*',
      Allow: ['/offers', '/contact', '/models'],
    },
  },

  runtimeConfig: {
    public: {
      baseURL: 'localhost',
    },
  },
  devServerHandlers: [],
  nitro: {
    serveStatic: true,
  },
  experimental: {
    payloadExtraction: false,
  },
devServer: {
    port: 3044
  }
})
