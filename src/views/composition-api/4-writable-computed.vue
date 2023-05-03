<script setup lang="ts">
import {ref, computed} from "vue"

const count = ref(1)
const plusOne = computed(() => count.value + 1)

/**
 * 确保 `plusOne` 可以被写入。
 * 最终我们得到的结果应该是 `plusOne` 等于 3 和 `count` 等于 2。
 */

plusOne.value++

</script>

<template>
  <h2>
    可写的计算属性 简单 #Composition API #Reactivity:Core
    <hr>
    在这个挑战中，你需要创建一个可写的计算属性 :
    <hr>
  </h2>
  <div>
    <p>{{ count }}</p>
    <p>{{ plusOne }}</p>
  </div>
</template>
