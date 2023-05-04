<script setup lang='ts'>

import {ref} from "vue"

/**
 * 实现以下自定义指令
 * 在表单输入元素和数据间创建双向绑定
 *
 */
const VOhModel = {}

const value = ref("Hello Vue.js")

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

