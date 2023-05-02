<script setup lang="ts">

// Implement ...
function useEventListener(target, event, callback) {

}

// Implement ...
function useMouse() {
  useEventListener(window, "mousemove", () => {
  })
}

const {x, y} = useMouse()
</script>

<template>
  <h2>
    鼠标坐标 中等 #Composable Function
    <hr>
    在使用Vue.js时，我们应该关注可复用性，可组合函数是一个很好的方式，让我们开始吧 👇:
    <hr>
  </h2>
  Mouse position is at: {{ x }}, {{ y }}
</template>
