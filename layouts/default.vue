<script lang="ts" setup>

const user = useUser();

</script>

<template>
  <component is="div">
    <nav class="">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink to="/vueuse">VueUse</NuxtLink>
      <NuxtLink to="/teams/my-team/users/111">My Team Page</NuxtLink>
      <NuxtLink to="https://vueschool.io/lessons/nuxtlink-for-navigation">Vue School</NuxtLink>
      <div>
        <NuxtLink to="/login" v-if="!user.isLoggedIn">Login</NuxtLink>
        <button @click.prevent="user.logout" v-else class="link">Logout</button>
      </div>
    </nav>
    <div class="container mt-16 mx-auto px-8 ">
      <slot />
    </div>
  </component>
</template>

<style scoped></style>
