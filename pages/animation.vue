<script lang="ts" setup>

import {useInterval, useRafFn} from "@vueuse/core";

const {counter, pause, resume, isActive} = useInterval(100, {controls:true});
console.log(counter, isActive)
const frame = ref(-75);

const {pause:pauseAnimation, resume:resumeAnimation} = useRafFn(()=>{
 if (frame.value % 5) return;
 if(frame.value > -525) {
   frame.value -= -75;
 }else{
   frame.value = 0;
 }

});

</script>

<template>
  <component is="div">

  <div class="flex flex-col gap-8">
    {{ counter }}
  <div class="flex gap-4">
    <button v-if="isActive" @click="pause" class="btn-submit w-[250px]">Pause</button>
    <button v-else @click="resume" class="btn-submit w-[250px]"><span v-if="counter === 0">Start</span><span v-else>Resume</span></button>
    <button  @click="counter = 0" class="btn-submit w-[250px]">Reset</button>

  </div>
  </div>
    <div class="flex flex-col gap-8 my-8">
      <div class="sprite"></div>
    </div>

  </component>
</template>

<style scoped>
.sprite{
  background-image: url('/images/walking_man.png');
  width:75px;
  height:150px;
  background-position: v-bind(frame+ 'px') 50%;

}
</style>
