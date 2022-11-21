// https://v3.nuxtjs.org/api/configuration/nuxt.config
import {fileURLToPath} from "url";

export default defineNuxtConfig({
  modules: [
    ["@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      }],
    '@nuxtjs/tailwindcss'],
  imports: {
    dirs: ["stores"],
  },
  app: {
    pageTransition: {name: 'page', mode: 'out-in'}
  },
  routeRules:{
    "/":{swr:true},
    "/teams":{static:true},
    "/vueuse":{ssr: false},
    "/infinitescroll":{ssr:false},
  },
  alias:
    {
      video: fileURLToPath(new URL('/video/', import.meta.url)),
      images: fileURLToPath(new URL('/images/', import.meta.url)),
    }
})

