<script setup>



useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | My Movie Search` : `My Demo Site`
  }
})
</script>
<template>
  <NuxtLayout>

    <NuxtPage/>
  </NuxtLayout>

</template>
<style>


</style>
