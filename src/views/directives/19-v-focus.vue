<script setup lang='ts'>
import {ref, watch} from "vue"

const state = ref(true)

/**
 * 实现一个自定义指令,让元素获取焦点
 * 确保当切换`state`时,元素随着状态值获取/失去焦点
 *
 */
function focus(el: HTMLElement, isFocus: boolean): void {
  if (isFocus) {
    el.focus()
  } else {
    el.blur()
  }
}

const VFocus = {
  mounted(el: HTMLElement, binding: { value: boolean }) {
    focus(el, binding.value)
    watch(state, value => {
      focus(el, value)
    })
  }
}

setInterval(() => {
  state.value = !state.value
}, 2000)

</script>

<template>
  <h2>
    切换焦点指令 中等 #Directives
    <hr>
    这个挑战开始，我们将尝试编写自定义指令，让我们从v-focus开始 👇:
    <hr>
  </h2>

  <input v-focus="state" type="text">
</template>

