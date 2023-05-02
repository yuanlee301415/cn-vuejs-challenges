<template>
  <h2>
    实现本地存储函数 中等 #Composable Function
    <hr>
    我们经常需要使用localStorageAPI，一个好用的可组合函数封装将帮助我们更好地使用它，让我们开始吧 👇:
    <hr>
  </h2>
  <h1>使用 `customRef` 自定义 ref</h1>
  <pre>counter: {{ counter }}</pre>
  <input v-model="counter">
  <button @click="inc">Inc</button>
</template>
<script setup lang='ts'>
import {customRef} from "vue"

/**
 * 实现`useLocalStorage`函数
 */
/**
 * 使用 `customRef` 自定义 ref
 */
function useLocalStorageCustomRef(key: string, initialValue: any) {
  window.localStorage.setItem(key, initialValue)
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return window.localStorage.getItem(key)
      },
      set(val: any) {
        trigger()
        window.localStorage.setItem(key, val)
      }
    }
  })
}

const counter = useLocalStorageCustomRef("counter", 0)

// 我们可以通过触发`counter`的`getter`来获取本地存储的值
console.log(counter.value)

// 同样地,我们也可以通过触发`counter`的`setter`来设置本地存储的值
counter.value = 1

function inc() {
  counter.value++
}
</script>

