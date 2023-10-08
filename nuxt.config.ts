// https://nuxt.com/docs/api/configuration/nuxt-config
import "dotenv/config";
export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n", "@nuxtjs/supabase"],
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
  },
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
      ],
    },
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
    cookieOptions: {
      maxAge: 30 * (24 * (60 * 60)),
    }
  },
  nitro: {
    preset: "vercel"
  }
});
