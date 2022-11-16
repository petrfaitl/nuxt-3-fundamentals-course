<script lang="ts" setup>

const user = useUser();
const credentials = reactive({
  username:"",
  password:""
})

definePageMeta({
  layout:"plain",
})
</script>

<template>
  <div class="flex mx-auto justify-center w-[450px] h-screen items-center" >
    <form @submit.prevent="user.login()" class="flex flex-col gap-4 w-full bg-slate-200 p-16 rounded-xl shadow">
      <label for="username">
        Username
      </label>
        <input type="text" name="username" autocomplete="username" id="username" placeholder="Enter username" v-model="credentials.username">
      <label for="password">
        Password
      </label>
        <input type="password" autocomplete="current-password" name="password" id="password" placeholder="Enter password" v-model="credentials.password">
      <div class="mt-8">
        <button type="submit" class="px-4 py-3 bg-teal-300 rounded w-full text-teal-900 hover:shadow-lg transition-all">Login</button>
      </div>
    </form>
  </div>


</template>

<style scoped>
input{
  @apply px-4 py-3 rounded shadow;
}
label{
  ;
}
</style>
