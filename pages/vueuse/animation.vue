<script lang="ts" setup>

import {useInterval, useRafFn, useTimestamp} from "@vueuse/core";
import {useTitle} from "@vueuse/core";

const title = useTitle();
title.value = "Vueuse Animation";

const {counter, pause, resume, isActive} = useInterval(1000, {controls:true});
// console.log(counter, isActive)
const frame = ref();
const framesComplete = ref(0);
const speed = ref(5);

const {pause:pauseAnimation, resume:resumeAnimation, isActive: isActiveAnimation} = useRafFn(()=>{
 framesComplete.value ++;
  if (framesComplete.value % speed.value) return;
 if(frame.value > -525) {
   frame.value -= 75;
 }else{
   frame.value = 0;
 }

});


const start = Date.now();
const timestamp = useTimestamp();
const secondsPassed = computed(()=>{
  return Math.floor((timestamp.value - start) /1000);
})

const hangBrowser = ()=>{
  const j = 0;
  for(let i=0; i<100000;i++){
    console.log(j);
  }

}

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
    <div class="border"></div>
  </div>
    <div class="flex flex-col gap-8 my-8">
      <div class="flex gap-4">
      <button @click="isActiveAnimation?pauseAnimation():resumeAnimation()" class="btn-submit w-[250px]">{{ isActiveAnimation?"Pause":"Resume"}}</button>
        <button @click="(speed>0)? speed--:''" class="btn-submit">+</button>
        <div class="flex items-center">{{Math.floor(1/speed*100)}}</div>
        <button @click="(speed>=0)? speed++:''" class="btn-submit">-</button>
      </div>
        <div class="sprite"></div>
    </div>
    <div class="border"></div>
    <div class="flex flex-col mx-auto  content-start items-start gap-4 my-8">
      <span>Interval: {{counter}} </span>
      <span>Timestamp: {{secondsPassed}} (non blocking code)</span>

      <button @click="hangBrowser" class="btn-submit">Hang Browser</button>
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
