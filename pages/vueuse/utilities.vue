<script lang="ts" setup>

useHead({
  title: "Utilities"
});
import {useFetch} from "@vueuse/core";

// const id = ref(1);
const url = 'https://jsonplaceholder.typicode.com/';

// const url = computed(() => {
//   return `https://jsonplaceholder.typicode.com/todos/${id.value}`
// });

const data =  useFetch(url).get();
console.log(data);

</script>

<template>
  <div>
<!--    <div v-if="error" class="text-red-500">{{ error }}</div>-->

<!--    <div v-else-if="isFetching" class="text-blue-600">loading...</div>-->
<!--    <div >{{ data }}</div>-->
  </div>

</template>

<style scoped></style>
