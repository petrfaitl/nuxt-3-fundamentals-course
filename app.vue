<script setup>

useHead({
  titleTemplate: (titleChunk)=>{
    return titleChunk? `${titleChunk} | My Movie Search`:`My Movie Search`}

})
</script>
<template>
  <NuxtLayout>

    <NuxtPage />
  </NuxtLayout>

</template>
<style>
body{
  font-family: sans-serif;
  @apply text-slate-600 bg-slate-50;
}
a, .link{
  @apply text-teal-600 active:text-teal-800 hover:underline

}
nav{
  @apply p-8 bg-teal-50 flex gap-8
}
.router-link-active {
  color: red;
}
.router-link-exact-active {
  @apply text-teal-900
}

.page-enter-active,
.page-leave-active {
  @apply transition;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
