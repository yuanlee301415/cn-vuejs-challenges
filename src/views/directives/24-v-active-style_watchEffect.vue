<script setup lang='ts'>
import type {Directive} from "vue";
import {ref, watchEffect} from "vue"

/**
 * 实现该指令 :
 * 当切换该选项卡时，列表项文本颜色变为红色
 *
 */
type ElType = HTMLElement & {
  __stop__: () => void
}
type Binding = [CSSStyleDeclaration, () => boolean]

const handle = (el: ElType, binding: Binding) => {
  if (!binding) return;
  const [styleObj, fn] = binding

  el.__stop__ = watchEffect(() => {
    for (const [key, style] of Object.entries(styleObj)) {
      // el.style[key] = fn() ? style : null // Error: TS7015: Element implicitly has an 'any' type because index expression is not of type 'number'.
      // @ts-ignore
      el.style[key] = fn() ? style : null
    }
  })
}

const VActiveStyle: Directive<ElType, Binding> = {
  mounted(el, binding) {
    handle(el, binding.value)
  },
  updated(el, binding) {
    handle(el, binding.value)
  },
  unmounted(el: ElType) {
    el.__stop__()
  }
}

const list = [1, 2, 3, 4]
const activeTab = ref(0)

function toggleTab(index: number) {
  activeTab.value = index
}

</script>

<template>
  <h2>
    激活的样式-指令 困难 #Directives
    <hr>
    在这个挑战中，我们将实现一个"激活的样式"指令，让我们开始吧 👇:
    <hr>
  </h2>

  <ul>
    <li
        v-for="(item,index) in list"
        :key="index"
        v-active-style="[{'backgroundColor':'lightblue'},() => activeTab === index]"
        style="{padding: 0.5rem;margin: 0.1rem;border: 1px solid #ccc;cursor: pointer;}"
        @click="toggleTab(index)"
    >
      {{ item }}
    </li>
  </ul>
</template>
