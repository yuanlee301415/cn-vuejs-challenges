<script setup>
import {watch} from "vue"

/**
 * 补全以下函数来实现防抖ref :
 */
function useDebouncedRef(value, delay = 200) {

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

