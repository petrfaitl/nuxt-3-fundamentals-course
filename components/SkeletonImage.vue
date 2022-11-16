<script lang="ts" setup>
const {alt} = defineProps(["alt"]) ;
</script>

<template>
  <div class="border border-slate-200 shadow rounded-md p-4 max-w-sm w-full mx-auto h-[250px]">
    <div class="animate-pulse flex space-x-4">
      <div class="rounded-full bg-slate-200 h-10 w-10"></div>
      <div class="flex-1 space-y-6 py-1">
        <div class="h-2 bg-slate-200 rounded"></div>
        <div class="space-y-3">
          <div class="grid grid-cols-1 gap-4">
            <div class="text-sm whitespace-normal">{{alt}}</div>
            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
          </div>
          <div class="h-2 bg-slate-200 rounded"></div>
        </div>
      </div>
    </div>
  </div>
</template>


