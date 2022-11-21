<script lang="ts" setup>

import {useInterval} from "@vueuse/core";

const counter = useInterval();
console.log(counter)
</script>

<template>
  <div>
    {{ counter }}
  </div>
</template>

<style scoped></style>
