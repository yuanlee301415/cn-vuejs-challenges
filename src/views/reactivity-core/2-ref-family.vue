<script setup lang="ts">
import type {Ref} from "vue";
import {ref, reactive} from "vue"

const initial = ref(10)
const count = ref(0)

// 挑战 1: 更新 ref
function update(value) {
  // 实现...
}

/**
 * 挑战 2: 检查`count`是否为一个 ref 对象
 * 确保以下输出为1
 */
console.log('1:',
    // impl ? 1 : 0
)

/**
 * 挑战 3: 如果参数是一个 ref，则返回内部值，否则返回参数本身
 * 确保以下输出为true
 */
function initialCount(value: number | Ref<number>) {
  // 确保以下输出为true
  console.log('initialCount>true:', value === 10)
}

initialCount(initial)

/**
 * 挑战 4:
 * 为源响应式对象上的某个 `property` 新创建一个 `ref`。
 * 然后,`ref` 可以被传递，它会保持对其源`property`的响应式连接。
 * 确保以下输出为true
 */
const state = reactive({
  foo: 1,
  bar: 2,
})
const fooRef = ref() // 修改这里的实现...

// 修改引用将更新原引用
fooRef.value++
console.log('state.foo>true:', state.foo === 2)

// 修改原引用也会更新`ref`
state.foo++
console.log('fooRef.value>true:', fooRef.value === 3)

</script>

<template>
  <h2>
    ref 全家桶 简单 #Composition API #Reactivity:Core
    <hr>
    在这个挑战中，你将使用 响应式 API: ref 来完成它。 以下是你要实现的内容 👇:
    <hr>
  </h2>
  <div>
    <button @click="update(count-1)">-</button>
    {{ count }}
    <button @click="update(count+1)">+</button>
  </div>
</template>
