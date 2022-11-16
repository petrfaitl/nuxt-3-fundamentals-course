<script lang="ts" setup>


const route = useRoute();

const message = computed(()=>{
return `I'm on team ${route.params.teamSlug} and my user id is ${route.params.id} `
})
</script>

<template>
  <div>
    {{ message }}
  </div>
</template>

<style scoped></style>
