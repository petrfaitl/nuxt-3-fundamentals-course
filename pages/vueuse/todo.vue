<script lang="ts" setup>

import {useRefHistory, useTitle} from "@vueuse/core";

const title = useTitle();
title.value = "Todo";


const todos = ref<string[]>([]);
const item = ref<string>("");
const {history, undo, redo} = useRefHistory(todos, {deep: true, capacity: 15});

const addToDo = _ => {
  if (item.value) {
    todos.value.unshift(item.value);
    item.value = "";
  }
}

</script>
//TODO
<template>
  <div>
    <div class="flex gap-4 mb-8">
      <input v-model="item" type="text" class="w-[350px] px-4 py-2.5 border rounded" placeholder="Enter a new todo"/>
      <button @click="addToDo" class="btn-submit">Create Todo</button>
      <button @click="undo" class="btn-submit">Undo</button>
      <button @click="redo" class="btn-submit">Redo</button>
    </div>
    <div v-show="todos.length>0" class="m-4">
      <h2 class="font-bold capitalize">To Dos:</h2>
      <ul role="list" class="marker:text-teal-500 list-disc pl-5 space-y-3 list-outside">
        <li v-for="item in todos" :key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
