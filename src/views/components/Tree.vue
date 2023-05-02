<template>
  <dl v-for="item of props.data" :key="item.key">
    <dt>{{ item.title }}</dt>
    <dd v-if="item.children">
      <Tree :data="item.children"/>
    </dd>
  </dl>
</template>

<script setup lang="ts">
export interface TreeData {
  key: string
  title: string
  children: TreeData[]
}

const props = defineProps<{ data: TreeData[] }>()
</script>

<style scoped>
dl dl {
  padding-left: 1rem;
}
</style>
