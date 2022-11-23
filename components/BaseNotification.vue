<script lang="ts" setup>

import {useTimeout} from "@vueuse/core";
import {storeToRefs} from "pinia";

const notification = useNotifications();
const {message, duration} = storeToRefs(notification);
const {start, ready, stop} = useTimeout(duration.value, {controls: true});


watch(message, () => {
  if (message.value) {
    start();
  }
})
watch(ready, () => {
  if (ready.value) {
    notification.hide();
  }
})


</script>

<template>


  <Teleport to="body">
    <Transition appear>
      <div v-if="!ready"
           class="fixed w-full max-w-max z-50  inset-x-1/2 -translate-x-1/2 top-2 shadow-xl  px-4 py-3 bg-teal-300 dark:bg-teal-600 rounded-md flex gap-12 content-center">
        <div class="flex content-center">
          <div class="">
            {{ notification.message }}
          </div>
        </div>
        <div @click.capture="stop()"
             class="h-6 w-6 group hover:cursor-pointer bg-teal-900 text-teal-100 rounded-md flex justify-center  active:bg-opacity-80 ">
          <span class="">x</span>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.v-enter-active,
.v-leave-active {
  @apply transition-all duration-1000;
}

.v-enter-from,
.v-leave-to {
  @apply -translate-y-2 opacity-0;
}

</style>
