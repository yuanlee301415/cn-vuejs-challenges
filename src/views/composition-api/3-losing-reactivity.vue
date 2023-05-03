<script setup lang="ts">
import {reactive, toRefs} from "vue"

function useCount() {
  const state = reactive({
    count: 0,
  })

  function update(value: number) {
    state.count = value
  }

  return {
    state: toRefs(state),
    update,
  }
}

// 确保解构不丢失响应性
const {state: {count}, update} = useCount()

</script>

<template>
  <h2>
    响应性丟失 简单 #Composition API #Reactivity:Utilities
    <hr>
    在 JavaScript 中，我们经常解构/扩展对象。

    在Vue.js中，我们同样解构/扩展“响应式”对象，但它会失去响应性。

    如何保证解构/扩展不丢失响应性 ? 让我们开始吧 ！
    <hr>
  </h2>
  <button @click="update(count-1)">-</button>
  {{ count }}
  <button @click="update(count+1)">+</button>
</template>

