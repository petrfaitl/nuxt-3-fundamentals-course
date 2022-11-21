<script lang="ts" setup>

import {useDark, useToggle} from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const user = useUser();
const show = ref(false);

</script>

<template>
  <component is="div">
    <nav class="flex flex-col md:flex-row flex-wrap">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <div class="relative">

        <button @click="show =!show"  class="link" type="button">
          VueUse
        </button>
        <!-- Dropdown menu -->
        <div v-show="show" id="dropdown" class="nav-dropdown absolute z-10 w-44 shadow dark:bg-gray-700">
          <ul class="py-1  text-sm text-gray-700 dark:text-gray-200">
            <li>

              <NuxtLink class="block py-2 px-4 "
                        to="/sensors">Sensors
              </NuxtLink>
            </li>
            <li>

              <NuxtLink class="block py-2 px-4 "
                        to="/media">Media
              </NuxtLink>
            </li>
            <li>

              <NuxtLink class="block py-2 px-4 "
                        to="/infinitescroll">Infinite Scroll
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="block py-2 px-4 "
                        to="/animation">Animation
              </NuxtLink>

            </li>

          </ul>
        </div>
      </div>

      <NuxtLink to="/teams/my-team/users/111">My Team Page</NuxtLink>
      <!--      <NuxtLink to="https://vueschool.io/lessons/nuxtlink-for-navigation">Vue School</NuxtLink>-->
      <div class="link">
        <NuxtLink to="/login" v-if="!user.isLoggedIn">Login</NuxtLink>
        <a href="#" @click.prevent="user.logout" v-else class="">Logout</a>
      </div>
      <div class="ml-auto justify-self-end">
        <button @click="toggleDark()" class="btn-submit ">{{ `${isDark ? "Light" : "Dark"}` }}</button>
      </div>
    </nav>
    <div class="container mt-16 mx-auto px-8 ">
      <slot/>
    </div>
  </component>
</template>

<style scoped></style>
