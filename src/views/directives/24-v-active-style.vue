<script setup lang='ts'>

import {ref} from "vue"

/**
 * 实现该指令 :
 * 当切换该选项卡时，列表项文本颜色变为红色
 *
 */
const VActiveStyle = {}

const list = [1, 2, 3, 4, 5, 6, 7, 8]
const activeTab = ref(0)

function toggleTab(index: number) {
  activeTab.value = index
}

</script>

<template>
  <h2>
    激活的样式-指令 困难 #Directives
    <hr>
    在这个挑战中，我们将实现一个"激活的样式"指令，让我们开始吧 👇:
    <hr>
  </h2>

  <ul>
    <li
        v-for="(item,index) in list"
        :key="index"
        v-active-style="[{'backgroundColor':'lightgray'},() => activeTab === index]"
        @click="toggleTab(index)"
    >
      {{ item }}
    </li>
  </ul>
</template>

<style scoped>
li {
  padding: 0.5rem;
  margin: 0.1rem;
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>
