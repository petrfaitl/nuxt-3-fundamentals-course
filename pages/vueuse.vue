<script lang="ts" setup>
import {useTitle} from '@vueuse/core';

const title = useTitle();
console.log(title.value)
title.value = "VueUse demo page";

</script>

<template>
  <div>
    <div class="flex flex-col gap-4">

      <h2 class="font-bold">
        UseTitle()
      </h2>
      <p>{{ title }}</p>
      <p>Try setting yor own title below</p>
      <input type="text" v-model="title" class="border border-slate-200 py-3 px-4"/>
    </div>
    <div class="border my-4"></div>
  </div>
</template>

<style scoped></style>
