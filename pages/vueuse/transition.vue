<script lang="ts" setup>

import {TransitionPresets, useTransition} from "@vueuse/core";


const width = ref(0.1);
const animatedWidth = useTransition(width, {transition:TransitionPresets.easeInCubic, duration:3000});

const load = _ => {
  width.value = 100;
}

const reset = _ => {
  width.value = 0.1;
}
</script>

<template>
  <div>
    <div class="flex gap-2">
      <div class="bg-teal-500 h-4 bar"></div>
      <div class="ml-auto">{{Math.floor(animatedWidth)}}</div>
    </div>
    <div class="flex gap-4">
      <button @click="load" class="btn-primary">Load</button>
      <button @click="reset" class="btn-primary">Reset</button>
    </div>
  </div>
</template>

<style scoped>
.bar {
  width: v-bind(animatedWidth+ "%");
}
</style>
