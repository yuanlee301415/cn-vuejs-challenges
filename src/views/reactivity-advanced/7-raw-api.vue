<script setup lang="ts">
import {reactive, isReactive} from "vue"

const state = {count: 1}
const reactiveState = reactive(state)

/**
 * 修改以下代码使输出为true
 */
console.log('===:', reactiveState === state)

/**
 * 修改以下代码使输出为false
 */
const info = {count: 1}
const reactiveInfo = reactive(info)

console.log('isReactive:', isReactive(reactiveInfo))

</script>

<template>
  <h2>
    原始值 API 中等 #Reactivity:Advanced
    <hr>
    在这个挑战中，你将使用 响应式 API: [xx]Raw 来完成它。 以下是你要实现的内容 👇:
    <hr>
  </h2>

  <div>
    <p>
      {{ reactiveState.count }}
    </p>
  </div>
</template>


