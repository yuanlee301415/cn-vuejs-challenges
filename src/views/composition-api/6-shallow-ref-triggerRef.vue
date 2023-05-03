<script setup lang="ts">
import {shallowRef, watch, triggerRef} from "vue"

const state = shallowRef({count: 1})

// 回调没被触发
watch(state, () => {
  console.log("State.count Updated")
}, {deep: true})

/**
 * 修改以下代码使watch回调被触发
 *
 */
state.value.count = 2
triggerRef(state)

</script>

<template>
  <h2>
    浅层 ref 简单 #Composition API #Reactivity:Advanced
    <hr>
    在这个挑战中，你将使用 响应式 API: shallowRef 来完成它。 以下是你要实现的内容 👇:
    <hr>
  </h2>
  <h1>triggerRef</h1>
  <div>
    <p>
      {{ state.count }}
    </p>
  </div>
</template>
