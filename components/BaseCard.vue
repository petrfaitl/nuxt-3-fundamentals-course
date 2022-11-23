<script lang="ts" setup>

const {title, description, src} = defineProps(['src', 'title', 'description'])
</script>

<template>
  <div class="bg-white dark:bg-teal-900 rounded-xl border flex flex-col overflow-hidden hover:shadow-lg hover:scale-[101%] transition-scale duration-150">
    <div class="w-full h-[150px] overflow-y-hidden">
      <img :src="src" :alt="title" class="w-full">
    </div>
    <div class="p-4 flex flex-col gap-4 my-2">
      <h3 class=" text-xl font-bold">
        {{ title }}
      </h3>
      <p>

        {{ description }}
      </p>
    </div>

  </div>
</template>

<style scoped></style>
