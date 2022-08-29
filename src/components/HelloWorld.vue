<script setup lang="ts">
// 响应式解构的方法
import { storeToRefs } from 'pinia'

// 引入Store
import {useMainStore} from '../store'
const mainStore = useMainStore()
mainStore.increment(100)
console.log(mainStore.$id);

// 不能直接解构
// const { count, doubleCount } = mainStore
// 此时的count、doubleCount不是响应式的！！！

// 解决方法 storeToRefs
const { count, doubleCount } = storeToRefs(mainStore)

const addCount = () => {
  mainStore.count++
}
</script>

<template>
  <div>mainStore.count：{{ mainStore.count}}</div>
  <div>mainStore.doubleCount：{{ mainStore.doubleCount }}</div>

  <hr>

  <div>storeToRefs--count：{{ count }}</div>
  <div>storeToRefs--doubleCount：{{ doubleCount }}</div>
  <button @click="addCount">changeCount</button>--
  <span>改变mainStore.count，因为storeToRefs的作用，解构出来的数据也是响应式的，也会一起改变</span>

  <hr>
  <div>getters使用到其他getters属性：{{  mainStore.fourTimes }}</div>
</template>

<style scoped>

</style>
