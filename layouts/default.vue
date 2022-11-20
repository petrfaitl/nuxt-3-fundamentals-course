<script lang="ts" setup>

import {useDark, useToggle} from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const user = useUser();

</script>

<template>
  <component is="div">
    <nav class="flex flex-col md:flex-row flex-wrap">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink to="/vueuse">VueUse</NuxtLink>
      <NuxtLink to="/infinitescroll">Infinite Scroll</NuxtLink>
      <NuxtLink to="/teams/my-team/users/111">My Team Page</NuxtLink>
<!--      <NuxtLink to="https://vueschool.io/lessons/nuxtlink-for-navigation">Vue School</NuxtLink>-->
      <div class="link">
        <NuxtLink to="/login" v-if="!user.isLoggedIn">Login</NuxtLink>
        <a href="#" @click.prevent="user.logout" v-else class="">Logout</a>
      </div>
      <div class="ml-auto justify-self-end">
        <button @click="toggleDark()" class="btn-submit ">{{ `${isDark?"Light":"Dark"}` }}</button>
      </div>
    </nav>
    <div class="container mt-16 mx-auto px-8 ">
      <slot />
    </div>
  </component>
</template>

<style scoped></style>
