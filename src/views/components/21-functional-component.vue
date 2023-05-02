<script setup lang='ts'>

import { ref } from "vue"

/**
 * 实现该函数式组件 :
 * 1. 使用`list`数据渲染列表元素 (ul/li)
 * 2. 当点击列表子元素时,将其文本颜色更改为红色
 */
const ListComponent = () => {
}

const list = [{
  name: "John",
}, {
  name: "Doe",
}, {
  name: "Smith",
}]

const activeIndex = ref(0)

function toggle(index: number) {
  activeIndex.value = index
}

</script>

<template>
  <h2>
    函数式组件 中等 #Components
    <hr>
    在这个挑战中，我们将尝试实现一个函数式组件，让我们开始吧 👇:
    <hr>
  </h2>
  <list-component
      :list="list"
      :active-index="activeIndex"
      @toggle="toggle"
  />
</template>

