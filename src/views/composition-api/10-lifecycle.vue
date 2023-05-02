<template>
  <h2>
    生命周期钩子 简单 #Composition API #Lifecycle
    <hr>
    在这个挑战中，你将使用 组合式 API: 生命周期钩子 来完成它。 以下是你要实现的内容 👇:
    <hr>
  </h2>
  <button @click="visible=!visible">Toggle</button>
  <Child v-if="visible"/>
</template>

<script lang="ts" setup>
import {ref, provide} from "vue";
import Child from './Child.vue'

const visible = ref(true)
const timer = ref<number>()
const count = ref(0)

provide('timer', timer)
provide('count', count)
</script>
