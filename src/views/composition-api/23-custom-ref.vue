<script setup lang="ts">
import {customRef, watch} from "vue"

/**
 * 补全以下函数来实现防抖ref :
 */
function useDebouncedRef<T = string>(value: T, delay = 200) {
  let timer: number | undefined
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          trigger()
          value = newValue
        }, delay)
      }
    }
  })
}

const text = useDebouncedRef("hello")

/**
 * 确保在输入框快速输入时, 只触发一次回调。
 */
watch(text, (value) => {
  console.log('watch>value:', value)
})
</script>

<template>
  <input v-model="text"/>
</template>

