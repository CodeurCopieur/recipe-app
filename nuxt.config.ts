// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Configuration Nuxt 4
  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    // Activer les fonctionnalités expérimentales de Nuxt 4
    componentIslands: true,
    payloadExtraction: true
  },

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image"
  ],
  googleFonts: {
    families: {
      Montserrat: true,
    }
  }
})