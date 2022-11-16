// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    ["@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      }], '@nuxtjs/tailwindcss'],
  imports: {
    dirs: ["stores"],
  },
  app: {
    pageTransition: {name: 'page', mode: 'out-in'}
  }
})

