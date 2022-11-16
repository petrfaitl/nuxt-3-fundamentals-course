<script async setup>

const movie = ref("");
const route = useRoute();
const router = useRouter();
const id = route.params.id;

definePageMeta({
  middleware: 'auth',
})


const {pending, data, error} = await useFetch(`http://www.omdbapi.com/?apikey=bfab315d&i=${id}`, {
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
      <h1 class="text-3xl my-8">
        {{ movie.value.Title }} ({{ movie.value.Year }})
      </h1>
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
