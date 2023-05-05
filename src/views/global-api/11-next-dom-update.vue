<script setup lang="ts">
import {ref, nextTick} from "vue"

const count = ref(0)

function increment() {
  count.value++

  /**
   * DOM还未更新,如何确保DOM已经更新 ?
   * 请保证以下输出为true
   */
  nextTick(() => {
    // @ts-ignore
    console.log(+document.getElementById("counter").textContent === 1)
  })
}
</script>

<template>
  <h2>
    下一次DOM更新 简单 #Global API:General
    <hr>
    在Vue.js中改变响应式状态时，DOM不会同步更新。 Vue.js 提供了一个用于等待下一次DOM更新的方法，让我们开始吧 👇:
    <hr>
  </h2>

  <button id="counter" @click="increment">
    {{ count }}
  </button>
</template>

