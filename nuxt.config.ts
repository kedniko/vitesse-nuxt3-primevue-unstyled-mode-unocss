import path from 'node:path'
import { pwa } from './config/pwa'
import { appDescription } from './constants/index'

export default defineNuxtConfig({
  devtools: { enabled: false },
  build: { transpile: ['primevue'] },
  tailwindcss: { viewer: false },
  pwa,
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-primevue',
  ],

  primevue: {
    usePrimeVue: true,
    importPT: { as: 'CustomTailwind', from: '@/assets/primevue/presets/unstyled' },
    options: {
      unstyled: true,
      ripple: true,
      inputStyle: 'filled',
    },
    components: {
      prefix: 'PV',
      include: [
        'Checkbox',
        'ColorPicker',
        'InputText',
        'InputSwitch',
        'Paginator',
      ],
    },
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  css: ['@unocss/reset/tailwind.css'],

  colorMode: {
    classSuffix: '',
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDescription },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

})
