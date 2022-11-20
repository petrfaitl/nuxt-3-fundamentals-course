<script lang="ts" setup>

import {useInfiniteScroll} from "@vueuse/core";

const productData = ref([]);
const loaded = ref(0)
const totalResults = ref(0);
const el = ref<HTMLElement|null> (null);


loadData();
useInfiniteScroll(el,loadData,{distance: 10});

async function loadData() {
  if(productData.value.length!==0 && productData.value.length >= totalResults.value) return;
  console.log("loaded before",loaded.value);

  const {data}   = await useFetch(`https://dummyjson.com/products`, {key:loaded.value.toString(), query:{skip:productData.value.length, limit:10}});
  console.log(data.value);
  productData.value.push(...data.value.products);
  totalResults.value = data.value.total;
  loaded.value += data.value.skip + data.value.limit;
  console.log("loaded after",loaded.value);
}
</script>

<template>
  <div ref="el" class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-8">
    <BasicCard  v-for="product in productData" :key="product.id" :title="product.title" :src="product.thumbnail" :description="product.description"/>
  </div>
</template>

