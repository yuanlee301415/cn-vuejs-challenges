<script setup lang="ts">
import {ref, vModelText} from "vue";

const _vModelText = vModelText
const text = ref('')

_vModelText.updated = (el, {value, modifiers: {capitalize}}) => {
  if (value && capitalize) {
    el.value = value[0].toUpperCase() + value.slice(1)
  }
}

</script>

<template>
  <h2>
    大写 简单 #Directives
    <hr>
    请创建一个自定义的修饰符 capitalize，它会自动将 v-model 绑定输入的字符串值首字母转为大写：
    <hr>
  </h2>
  
  <input type="text" v-model.capitalize="text"/>
</template>
