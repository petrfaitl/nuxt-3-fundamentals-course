<script lang="ts" setup>

import {useDisplayMedia, useMediaControls} from "@vueuse/core";

const video  = ref(null);
const {stream, enabled} = useDisplayMedia();

const video2 = ref(null);
const {playing, currentTime, duration, volume} =  useMediaControls(video2, {src:'video/video.mp4'})


watchEffect(()=>{
  if(video.value){
    video.value.srcObject = stream.value;
  }
})
onMounted(()=>{
  volume.value = 0.5;
})
</script>

<template>
  <component is="div">
  <div class="mx-auto">
    <button class="btn-submit" @click="enabled = !enabled">Start Screen Share</button>
    <div class="border border-teal-600 h-fit my-8 max-h-fit">
    <video ref="video" muted autoplay controls class="w-full" />
    </div>
  </div>

  <div class="mx-auto">
    <button class="btn-submit" @click="playing = !playing"><span v-if="playing">Pause</span><span v-else>Play</span></button>
    <div class="border border-teal-600 h-fit my-8 max-h-fit">
      <video ref="video2" controls class="w-full" />
    </div>
  </div>
  </component>
</template>

<style scoped></style>
