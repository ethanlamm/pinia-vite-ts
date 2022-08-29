<script setup lang="ts">
// 引入Store
import {useMainStore} from '../store'
const mainStore = useMainStore()
mainStore.increment(100)
console.log(mainStore.$id);

</script>

<template>
  <div>{{ mainStore.count}}</div>
  <div>{{  mainStore.doubleCount }}</div>
</template>

<style scoped>

</style>
