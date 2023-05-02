<script setup lang="ts">
import type { Ref } from "vue";
import {onMounted, inject, onUnmounted} from "vue"

const timer = inject<Ref<number>>('timer')
const count = inject<Ref<number>>('count')

onMounted(() => {
  // 切换子组件时, 定时器将不正常工作, 让我们来修复它 .
  timer!.value = window.setInterval(() => {
    count!.value++
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer?.value)
})

</script>

<template>
  <div>
    <p>
      Child Component: {{ count }}
    </p>
  </div>
</template>

