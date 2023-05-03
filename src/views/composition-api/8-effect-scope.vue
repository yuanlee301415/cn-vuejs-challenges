<script setup lang="ts">
import {ref, computed, watch, watchEffect} from "vue"

const counter = ref(1)
const doubled = computed(() => counter.value * 2)

// 使用 `effectScope` API 使这些Effect效果在触发一次后停止

watch(doubled, () => console.log('watch:', doubled.value))
watchEffect(() => console.log("watchEffect:", doubled.value))

counter.value = 2

setTimeout(() => {
  counter.value = 4
})

</script>

<template>
  <div>
    <p>
      {{ doubled }}
    </p>
  </div>
</template>
