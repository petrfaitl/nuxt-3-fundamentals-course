<script async setup>

import {useClipboard} from "@vueuse/core";

const movie = ref("");
const route = useRoute();
const router = useRouter();
const id = route.params.id;

const {copy , copied} = useClipboard();

definePageMeta({
  middleware: 'auth',
})


const {pending, data, error} = await useFetch(`https://www.omdbapi.com/?apikey=bfab315d&i=${id}`, {
  key: id,

  async onResponse({request, response}) {
    if (response._data.Error === "Incorrect IMDb ID.") {
      showError({statusCode: 404, statusMessage: "Page not found"});
    }
    // console.log("response: ", response)
  },
});
// console.log("Error: ",error);
if (data.value) {
  movie.value = data;
  useHead({
    title: `${data.value.Title}`,
    meta: [
      {name: "description", content: data.value.Plot},
      {property: "og:description", content: data.value.Plot},
      {property: "og:image", content: data.value.Poster},
      {name: "twitter:card", content: `summary_large_image`},
    ]
  })
}


</script>

<template>
  <component is="div">
    <div>
      <a href="#" @click.prevent="router.go(-1)">&lt; Back to search</a>
    </div>
    <div v-if="!pending && movie.value" class="flex flex-col">
      <div class="flex gap-4 my-8">
      <h1 class="text-3xl">
        {{ movie.value.Title }} ({{ movie.value.Year }})</h1> <button class="text-teal-600 hover:text-teal-800" @click='copy(`${movie.value.Title} (${movie.value.Year})`)'><span v-if="copied">Copied!</span> <span v-else>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6" />
</svg>


      </span>
      </button>
      </div>

      <div class="flex flex-col gap-4">
        <div class="flex gap-8">

          <img v-if="movie.value.Poster!=='N/A'"
               :src="movie.value.Poster"
               :alt="movie.value.Title"
               :title="movie.value.Title"
               class="h-96 "/>
          <div class="flex flex-col gap-2">
            <div class="">{{ movie.value.Runtime }}<span v-show="movie.value.Rated !== 'N/A'">, {{
                movie.value.Rated
              }}</span><span v-show="movie.value.Country !== 'N/A'">, {{ movie.value.Country }}</span></div>
            <div class="text-sm italic">{{ movie.value.Genre }}</div>
            <div class="text-sm">Staring: {{ movie.value.Actors }}</div>
            <div class="text-sm">Director: {{ movie.value.Director }}</div>
            <div class="text-sm" v-for="rating in movie.value.Ratings" :key="rating.Source">{{ rating.Source }}
              {{ rating.Value }}
            </div>
            <div class="text-sm" v-show="movie.value.Awards !== 'N/A'">Awards: {{ movie.value.Awards }}</div>
            <p class="mt-4">{{ movie.value.Plot }}</p>
          </div>
        </div>


      </div>

    </div>
  </component>
</template>

<style scoped></style>
