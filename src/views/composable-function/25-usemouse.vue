<script setup lang="ts">
import {onMounted, reactive, toRefs, onUnmounted} from "vue";

// Implement ...
function useEventListener(target: EventTarget, event: keyof HTMLElementEventMap, callback: EventListener) {
  onMounted(() => {
    target.addEventListener(event, callback)
  })
  onUnmounted(() => {
    target.removeEventListener(event, callback)
  })
}

// Implement ...
type MousePoint = {
  x: number
  y: number
}

function useMouse() {
  const point = reactive<MousePoint>({
    x: 0,
    y: 0
  })
  useEventListener(window, "mousemove", (evt) => {
    console.log(evt)
    const {x, y} = evt as MouseEvent
    point.x = x
    point.y = y
  })
  return toRefs(point)
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
