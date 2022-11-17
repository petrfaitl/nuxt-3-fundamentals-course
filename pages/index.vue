<script lang="ts" setup>

import {useDateFormat, useNow} from "@vueuse/core";

const formattedDate = useDateFormat(useNow(), 'HH:mm ddd, DD MMM YYYY', {locales:'en-NZ'});
</script>

<template>
  <div>

  <div class="text-3xl">
    Nuxt.js Movies Search Demo
  </div>
  <div>{{formattedDate}}</div>
  </div>
</template>

<style scoped></style>
