<script lang="ts" setup>
import {timestamp, useTimeAgo} from "@vueuse/core";

const slider = ref(0);
const value = computed(()=> timestamp() + slider.value **3);
const timeAgo = useTimeAgo(value);


</script>

<template>
  <div class="flex flex-col gap-6">
    {{timeAgo}}
    <input v-model="slider" class=" opacity-80 hover:opacity-100 bg-slate-200 h-2 appearance-none rounded-full slider" type="range" min="-3800" max="3800"/>
    {{slider**3}}ms

<!--    <div class="max-w-lg w-[500px] mx-auto p-8">-->
<!--      <details  class="bg-white dark:bg-slate-900 ring-1 ring-black/5 dark:ring-white/10 shadow-lg p-6 rounded-lg">-->
<!--        <summary class="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">-->
<!--          Why do they call it Ovaltine?-->
<!--        </summary>-->
<!--        <div class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">-->
<!--          <p>The mug is round. The jar is round. They should call it Roundtine.</p>-->
<!--        </div>-->
<!--      </details>-->
<!--    </div>-->
  </div>
</template>

<style scoped>
.slider{
  /*-webkit-appearance: none;*/
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 1.3rem;
  height: 1.3rem;
  cursor: pointer;
  border-radius: 50%;
  @apply bg-teal-600;
}
</style>
