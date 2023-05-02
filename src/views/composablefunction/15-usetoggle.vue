<script setup lang='ts'>

/**
 * 实现一个切换状态的可组合函数
 * 确保该功能正常工作
 */
function useToggle() {

}

const [state, toggle] = useToggle(false)

</script>

<template>
  <h2>
    切换器 中等 #Composable Function
    <hr>
    这个挑战开始,我们将尝试编写可组合函数，让我们从useToggle开始 👇:
    <hr>
  </h2>
  <p>State: {{ state ? 'ON' : 'OFF' }}</p>
  <p @click="toggle">
    Toggle state
  </p>
</template>

