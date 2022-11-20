<script lang="ts" setup>

const user = useUser();
const credentials = reactive({
  username:"",
  password:""
})

definePageMeta({
  layout:"plain",
})

useHead({
  title: "Login"
})
</script>

<template>
  <div class="flex mx-auto justify-center w-[450px] h-screen items-center" >
    <form @submit.prevent="user.login()" class="flex flex-col gap-4 w-full bg-slate-200 dark:bg-slate-600 p-16 rounded-xl shadow">
      <label for="username">
        Username
      </label>
        <input type="text" name="username" autocomplete="username" id="username" placeholder="Enter username" v-model="credentials.username">
      <label for="password">
        Password
      </label>
        <input type="password" autocomplete="current-password" name="password" id="password" placeholder="Enter password" v-model="credentials.password">
      <div class="mt-8">
        <button type="submit" class="btn-submit w-full">Login</button>
      </div>
    </form>
  </div>


</template>

<style scoped>
input{
  @apply px-4 py-3 rounded shadow;
}

</style>
