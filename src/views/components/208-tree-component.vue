<script setup lang="ts">
import type {TreeData} from "./Tree.vue";
import Tree from './Tree.vue'

const treeData: TreeData[] = [
  {
    key: '1',
    title: 'level_1',
    children: [
      {
        key: '1-1',
        title: 'level_1-1',
        children: [
          {
            key: '1-1-1',
            title: 'level_1-1-1',
            children: [
              {
                key: '1-1-1-1',
                title: 'level_1-1-1-1'
              },
              {
                key: '1-11-2',
                title: 'level_1-1-1-2'
              },
              {
                key: '1-11-3',
                title: 'level_1-1-1-3'
              }
            ]
          }
        ]
      },
      {
        key: '1-2',
        title: 'level_1-2',
        children: [
          {
            key: '1-2-1',
            title: 'level_1-2-1'
          },
          {
            key: '1-2-2',
            title: 'level_1-2-2'
          }
        ]
      },
      {
        key: '1-3',
        title: 'level_1-3'
      }
    ]
  },
  {
    key: '2',
    title: 'level_2',
  }
]
</script>

<template>
  <h2>
    树组件 困难 #Components
    <hr>
    在这个挑战中，你需要实现一个树组件，让我们开始吧。
    <hr>
  </h2>
  <!-- do something.... -->
  <Tree :data="treeData"/>
</template>
