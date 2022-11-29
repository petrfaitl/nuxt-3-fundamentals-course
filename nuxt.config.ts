// https://v3.nuxtjs.org/api/configuration/nuxt.config
import {fileURLToPath} from "url";

export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  modules: [
    ["@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      }],
    ['@nuxtjs/tailwindcss', {
      cssPath: "~/assets/css/tailwind.css",
      configPath: "tailwind.config.js",
      exposeConfig: true,
      config: {},
      injectPosition: 0,
      viewer: false
    }],
    '@vueuse/nuxt',
  ],
  tailwindcss: {
    exposeConfig: true,
  },
  imports: {
    dirs: ["stores"],
  },
  app: {
    pageTransition: {name: 'page', mode: 'out-in'}
  },
  routeRules: {
    "/": {swr: true},
    "/teams": {static: true},
    "/vueuse/**": {ssr: false},
    "/vueuse/utilities": {ssr: true},

  }
})

