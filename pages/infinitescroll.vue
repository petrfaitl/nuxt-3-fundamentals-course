<script lang="ts" setup>

import {useInfiniteScroll, useScroll} from "@vueuse/core";

const productData = ref([]);
const loaded = ref(0)
const totalResults = ref(0);
const el = ref<HTMLElement | null>(null);
const scroll = useScroll(el);


loadData();
useInfiniteScroll(el,loadData,{distance: 10, direction:'bottom'});


async function loadData() {
  if(productData.value.length!==0 && productData.value.length >= totalResults.value) return;
  console.log("loaded before",loaded.value);
  const res   = await fetch(`https://dummyjson.com/products?skip=${productData.value.length}&limit=10`);

  const data = await res.json();
  // console.log(data);
  productData.value.push(...data.products);
  totalResults.value = data.total;
  loaded.value = loaded.value + data.skip + data.limit;
  console.log("loaded after",loaded.value);
}
</script>

<template>
  <div ref="el" class="h-screen overflow-y-scroll">
  <div  class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-8">
    <BasicCard  v-for="product in productData" :key="product.id" :title="product.title" :src="product.thumbnail" :description="product.description"/>
  </div>
  </div>
</template>

