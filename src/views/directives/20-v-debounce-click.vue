<script setup lang='ts'>

/**
 * 实现以下自定义指令
 * 确保在一定时间内当快速点击按钮多次时只触发一次点击事件
 * 你需要支持防抖延迟时间选项, 用法如 `v-debounce-click:ms`
 *
 */

const VDebounceClick = {}

function onClick() {
  console.log("Only triggered once when clicked many times quicky")
}

</script>

<template>
  <h2>
    防抖点击指令 中等 #Directives
    <hr>
    在这个挑战中，我们将尝试实现一个防抖点击指令，让我们开始吧 👇:
    <hr>
  </h2>
  
  <button v-debounce-click:200="onClick">
    Click on it many times quickly
  </button>
</template>
