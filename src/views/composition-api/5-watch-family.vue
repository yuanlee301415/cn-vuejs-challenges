<script setup lang="ts">
import {ref, watch} from "vue"

const count = ref(0)

/**
 * 挑战 1: Watch 一次
 * 确保副作用函数只执行一次
 */
watch(count, () => {
  console.log("Only triggered once")
})

count.value = 1
setTimeout(() => count.value = 2)

/**
 * 挑战 2: Watch 对象
 * 确保副作用函数被正确触发
 */
const state = ref({
  count: 0,
})

watch(state, () => {
  console.log("The state.count updated")
})

state.value.count = 2

/**
 * 挑战 3: 副作用函数刷新时机
 * 确保正确访问到更新后的`eleRef`值
 */

const eleRef = ref()
const age = ref(2)
watch(age, () => {
  console.log(eleRef.value)
})
age.value = 18

</script>

<template>
  <h2>
    watch 全家桶 简单 #Composition API #Reactivity:Core
    <hr>
    在这个挑战中，你将使用 响应式 API: watch 来完成它。 以下是你要实现的内容 👇:
    <hr>
  </h2>
  <div>
    <p>
      {{ count }}
    </p>
    <p ref="eleRef">
      {{ age }}
    </p>
  </div>
</template>

