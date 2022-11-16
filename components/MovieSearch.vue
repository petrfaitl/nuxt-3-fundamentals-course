<script setup lang="ts">

const fetching = ref(false);
const totalResults = ref(0);


const useMovies = useState('movies', () => ({
  movies: [],
  query: "Batman",
  page: 1,
  totalPages:1,
}));


search(useMovies.value.page);

function prev() {
  useMovies.value.page--;
  search(useMovies.value.page);
}

function next() {
  useMovies.value.page++;
  search(useMovies.value.page);
}

function pageno(page) {
  useMovies.value.page = page;
  search(page);
}

async function search( page) {
  if (useMovies.value.query) {
    // const {
    //   pending,
    //   data
    // } = await useLazyFetch(`https://www.omdbapi.com/?apikey=bfab315d&s=${useMovies.value.query}`, {key: useMovies.value.query})

    const {pending, data, refresh, error} = await useFetch(`/api/movies`, {
      key: useMovies.value.query,
      query: {
        search: useMovies.value.query,
        page: page,
      }
    })
    // console.log(error);
    if(data.value.Error){
      showError({statusCode:401, statusMessage: "Error occurred"})
    }

    await refresh();
    // console.log((data));
    useMovies.value.movies = data.value.Search;
    fetching.value = pending.value;
    useMovies.value.totalPages = await totalPages(data);
    totalResults.value = data.value.totalResults;

  }
}

function totalPages(data) {
  const remainder = parseInt(data.value.totalResults) % data.value.Search.length
  // console.log(remainder);
  return  Math.floor(parseInt(data.value.totalResults) / 10) + (remainder ? 1 : 0);
}


useHead({
  title: "Search a Movie",
})

</script>
<template>
  <div>
    <component is="div" class="mx-auto w-full md:w-1/2">
      <form @submit.prevent="search()" class="flex flex-col gap-8 mx-auto items-center">
        <div class="flex flex-col gap-2 w-full">
          <label for="query" class="px-2">Search by title</label>
          <input type="text"
                 v-model="useMovies.query"
                 id="query"
                 placeholder="Enter movie title"
                 class="border border-slate-100 px-3 py-4">
        </div>
        <button type="submit"
                class="p-4 text-teal-50 bg-teal-500 active:bg-teal-600 hover:shadow-xl active:shadow rounded w-full">
          Search
        </button>

      </form>
    </component>

    <component is="div" v-if="useMovies.movies" class="mt-12 h-fit w-full mx-auto">
      <div v-if="useMovies.movies.length >0" >You are searching for
        <span class="font-bold">{{ useMovies.query }}</span> </div>
      <div class="mb-8">Movies found {{totalResults}}</div>
      <div class="grid grid-cols-3 md:grid-cols-4 gap-4 ">
        <div v-for="movie in useMovies.movies" :key="movie.imdbID" class="">

          <NuxtLink :to="{name:'movie-id' ,params:{id:  movie.imdbID}}"><img class="" v-if="movie.Poster!=='N/A'" :src="movie.Poster"
                                                                             :alt="movie.Title"/><SkeletonImage class="" v-else
                                                                                                      :alt="movie.Title"/>
          </NuxtLink>
        </div>
      </div>


    </component>
    <component is="div">

      <div class="flex gap-2 m-4">

        <span @click="pageno(1)"
              class="cursor-pointer hover:text-teal-600">first</span>
        <span v-if="useMovies.page > 1" @click="prev" class="cursor-pointer hover:text-teal-600">prev</span>
        <span class="cursor-pointer hover:text-teal-600">{{useMovies.page}}</span>
        <span v-if="useMovies.page < useMovies.totalPages" @click="next" class="cursor-pointer hover:text-teal-600">next</span>
        <span @click="pageno(useMovies.totalPages)" class="cursor-pointer hover:text-teal-600">last</span>
      </div>
    </component>
  </div>

</template>

<style scoped></style>
