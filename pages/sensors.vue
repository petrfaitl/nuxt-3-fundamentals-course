<script lang="ts" setup>
import {
  useTitle,
  onKeyStroke,
  useBattery,
  useGeolocation,
  useNetwork,
  useOnline,
  usePointer,
  useScroll
} from '@vueuse/core';

const title = useTitle();
// console.log(title.value)
title.value = "VueUse demo page";

const position = ref({x: 10, y: 0});
const canvas = ref(null);

const controls = {
  ArrowUp: () => position.value.y -= 5,
  ArrowDown: () => position.value.y += 5,
  ArrowLeft: () => position.value.x -= 5,
  ArrowRight: () => position.value.x += 5,
}

onKeyStroke(Object.keys(controls), (e) => {
  e.preventDefault();
  controls[e.key]();

})

function clearCanvas() {
  canvas.value.clear();
}


const battery = useBattery();
const online = useOnline();
const network = useNetwork();
const {coords, locatedAt, error} = useGeolocation();

const scrollBox = ref(null);
const scroll = useScroll(scrollBox);

</script>

<template>
  <div>
    <section class="flex flex-col gap-4 items-start">

      <h2 class="font-bold">
        UseTitle()
      </h2>
      <p>Page title: <span class="italic">{{ title }} </span></p>
      <p>Try setting your own title below</p>
      <input type="text" v-model="title" class="border border-slate-200 py-3 px-4 w-[500px]"/>
    </section>
    <div class="border my-4"></div>
    <section class="w-full h-[200px]">
      <h2 class="font-bold">
        onKeyStroke()
      </h2>
      <div class="relative">

        <div class="ball"></div>
      </div>
    </section>
    <div class="border my-4"></div>
    <section class="w-full">
      <h2 class="font-bold">
        Sensors
      </h2>

      Battery {{ battery }} <br>
      Online {{ online }} <br>
      Network {{ network }} <br>
      Geolocation
      <pre lang="json">{{
          JSON.stringify({
            coords:
                {
                  accuracy: coords.accuracy,
                  latitude: coords.latitude,
                  longitude: coords.longitude,
                  altitude: coords.altitude,
                  speed: coords.speed,
                }
          }, null, 2)

        }}</pre>
    </section>
    <div class="border my-4"></div>
    <section class="w-full">
      <h2 class="font-bold ">
        Canvas, usePointer()
      </h2>
      <div>

      </div>
      <button @click.prevent="clearCanvas()" class="btn-submit mb-4">Clear</button>
      <div class="w-full h-[250px] border border-slate-200 text-slate-900 dark:border-slate-50">
        <Canvas height="250" width="500" ref="canvas"/>

      </div>
    </section>
    <div class="border my-4"></div>
    <section class="w-full h-[200px]">

      <div class="w-[250px] h-[250px] p-2 overflow-scroll bg-white border" ref="scrollBox">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus necessitatibus nisi quae quasi quidem
        repellendus. Ab aliquid eos esse molestias nam, perferendis provident. Hic iste laudantium nemo pariatur quam,
        voluptatem.

        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus necessitatibus nisi quae quasi quidem
        repellendus. Ab aliquid eos esse molestias nam, perferendis provident. Hic iste laudantium nemo pariatur quam,
        voluptatem.

      </div>
      <pre class="my-12">
        {{scroll}}
      </pre>
    </section>
  </div>

</template>

<style scoped>

.ball {
  @apply h-8 w-8 rounded-full bg-red-700 dark:bg-red-400 absolute;
  top: v-bind(position.y+ 'px');
  left: v-bind(position.x+ 'px');

}
</style>
