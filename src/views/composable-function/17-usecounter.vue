<template>
  <h2>
    计数器 中等 #Composable Function
    <hr>
    在这个挑战中，我们将实现一个计数器。 👇:
    <hr>
  </h2>
</template>
<script setup lang='ts'>

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

}

const { count, inc, dec, reset } = useCounter(0, { min: 0, max: 10 })

</script>

