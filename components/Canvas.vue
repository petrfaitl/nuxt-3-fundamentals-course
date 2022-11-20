<script lang="ts" setup>

import {usePointer} from "@vueuse/core";

const pointer = reactive(usePointer());
const canvas = ref(null);

const {height, width} = defineProps(['height', 'width']);


onMounted(()=>{
  canvas.value.height = height;
  canvas.value.width = width;
  console.log(canvas)
})


function clear(){
  const ctx  = canvas.value.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);
}

defineExpose({clear});

watch(pointer, ()=>{
  if(pointer.pressure === 0) return;
  const ctx = canvas.value.getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillRect(pointer.x - 150, pointer.y-180, 5, 5)
})

</script>


<template>
  <div>
    <canvas ref="canvas" id="canvas" class="bg-white"></canvas>
  </div>
</template>

<style scoped></style>
