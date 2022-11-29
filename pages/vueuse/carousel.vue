<script lang="ts" setup>

import {useTimeout, useIntervalFn} from "@vueuse/core";

const images = [
  "https://img.freepik.com/premium-psd/delicious-breakfast-with-coffee_23-2148884981.jpg",
  "https://img.freepik.com/premium-photo/delicious-bread-with-strawberry-honey_23-2148695008.jpg",
  "https://img.freepik.com/free-photo/high-angle-tasty-arrangement-noodles-table_23-2148803858.jpg"
];
const {state, next, prev, isBackward, isForward} = useCycleListDirection(images); //custom override composable
// const {state, next, prev} = useCycleList(images); // default
const {ready, start} = useTimeout(5000, {controls:true});

const {isActive, pause, resume} = useIntervalFn(() => {
  if (isForward.value) {
    next();
  } else {
    prev();
  }
}, 3000);

function previousSlide(){
  if(isActive){
    pause();
    prev();
    start();
    if(ready){
      resume();
    }
  }
}
function nextSlide(){
  if(isActive){
    pause();
    next();
    start();
    if(ready){
      resume();
    }
  }
}

const direction = computed(() => {
  // console.log("Forward: ",isForward.value);
  // console.log("Backward: ",isBackward.value);
  if (isForward.value) {
    return {
      from: "translateX(100%)",
      to: "translateX(-100%)"
    }
  }
  return {
    from: "translateX(-100%)",
    to: "translateX(100%)"
  }
})

</script>

<template>
  <div class="flex flex-col gap-4">
    <div class=" relative h-96 overflow-visible">
      <transition>
        <img :src="state" :key="state" alt="image carousel" class="absolute h-96 w-full object-center object-cover"/>
      </transition>
    </div>
    <div class="flex gap-4">
      <button @click="previousSlide()" class="btn-primary">Previous</button>
      <button @click="nextSlide()" class="btn-primary">Next</button>
    </div>

  </div>
</template>

<style scoped>
.v-enter-from {
  transform: v-bind('direction.from');
  @apply opacity-0;
}

.v-leave-to {
  transform: v-bind('direction.to');
  @apply opacity-0;
}

.v-enter-active,
.v-leave-active {
  transition: all 2s;
}

</style>
