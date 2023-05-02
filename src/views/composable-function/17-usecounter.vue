<template>
  <h2>
    计数器 中等 #Composable Function
    <hr>
    在这个挑战中，我们将实现一个计数器。 👇:
    <hr>
  </h2>
  <pre>Count: {{ count }}</pre>
  <button @click="inc">Inc</button>
  <button @click="dec">Dec</button>
  <button @click="reset">Reset</button>
</template>
<script setup lang='ts'>

import {ref} from "vue";

interface UseCounterOptions {
  min?: number
  max?: number
}

/**
 * 实现计数器函数,确保功能正常工作
 * 1. 加 (+)
 * 2. 减 (-)
 * 3. 重置
 * 4. 最小值 & 最大值 选项支持
 */
function useCounter(initialValue = 0, options: UseCounterOptions = {}) {
  const {min = -Infinity, max = Infinity} = options
  const count = ref(init(Number(initialValue)))

  function init(val: number): number {
    return val < min ? min : val > max ? max : val
  }

  function inc() {
    count.value = init(count.value + 1)
  }

  function dec() {
    count.value = init(count.value - 1)
  }

  function reset() {
    count.value = init(initialValue)
  }

  return {
    count, inc, dec, reset
  }
}

const {count, inc, dec, reset} = useCounter(-1, {min: 0, max: 10})

</script>

