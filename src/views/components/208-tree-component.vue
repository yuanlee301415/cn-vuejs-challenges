<script setup lang="ts">
interface TreeData {
  key: string
  title: string
  children: TreeData[]
}
defineProps<{data: TreeData[]}>()
</script>

<template>
  <h2>
    树组件 困难 #Components
    <hr>
    在这个挑战中，你需要实现一个树组件，让我们开始吧。
    <hr>
  </h2>
  <!-- do something.... -->
</template>
