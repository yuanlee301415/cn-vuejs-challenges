<script setup lang="ts">
import {ref} from "vue"

const count = ref(0)

setInterval(() => {
  count.value++
}, 1000)
</script>

<template>
  <h2>
    优化性能的指令 中等 #Directives #Built-ins
    <hr>
    你知道它是什么吗 ? 让我们试试👇:
    <hr>
  </h2>

  <span>使它从不更新: {{ count }}</span>
</template>
