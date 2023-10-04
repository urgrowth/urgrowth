// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      '@nuxtjs/i18n'
    ]
  ],
  devtools: { enabled: true },
  css: [
    "@/assets/css/fonts.css",
    "@/assets/css/tailwind.css",
    "@/assets/css/global.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
