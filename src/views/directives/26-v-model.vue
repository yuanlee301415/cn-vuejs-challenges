<script setup lang='ts'>
import type {Directive} from "vue";
import {ref} from "vue"

/**
 * 实现以下自定义指令
 * 在表单输入元素和数据间创建双向绑定
 *
 */
type ElType = HTMLInputElement & {
  __handleInput__: (e: Event) => void
}
const VOhModel: Directive<ElType, string> = {
  mounted(el, binding) {
    console.log('binding:', binding)
    el.value = binding.value
    el.__handleInput__ = function (evt: Event) {
      (binding.instance as any).value = (evt.target as HTMLInputElement).value
    }
    el.addEventListener('input', el.__handleInput__)
  },
  beforeUnmount(el) {
    el.removeEventListener('click', el.__handleInput__)
  }
}

const value = ref("Hello Vue.js")

defineExpose({value})

</script>

<template>
  <h2>
    实现简易版`v-model`指令 困难 #Directives
    <hr>
    在这个挑战中，我们将尝试实现一个简单的v-model指令，让我们开始吧 👇:
    <hr>
  </h2>

  <input v-oh-model="value" type="text"/>
  <pre>value: {{ value }}</pre>
</template>

