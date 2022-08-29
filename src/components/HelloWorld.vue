<script setup lang="ts">
// import { reactive } from 'vue';
import {storeToRefs} from 'pinia';
import { useMainStore } from '../store';

// mainStore
const mainStore = useMainStore()
console.log(mainStore);
// console.log(mainStore.count);
// console.log(mainStore.user);

// 响应解构
// const { count, user } = reactive(mainStore)
const { count } = storeToRefs(mainStore)


// countStore
// console.log('countStore', count);
console.log('countStore', count.value);
// 使用
// console.log(count.count);
// count.increment(10)
// console.log(count.count);

console.log(count.value.count);
count.value.increment(10)
console.log(count.value.count);


// userStore
// console.log('userStore',user.value);
// console.log(user.name,user.age);

</script>
<template>
  <div>hello world</div>
</template>
<style scoped>

</style>
