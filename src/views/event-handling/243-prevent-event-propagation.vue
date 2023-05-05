<script setup lang="ts">

const click1 = () => {
  console.log('click1')
}

const click2 = () => {
  console.log('click2')
}

</script>

<template>
  <h2>
    阻止事件冒泡 简单 #Event Handling
    <hr>
    在这个挑战中，你需要阻止点击事件的冒泡，让我们开始吧。
    <hr>
  </h2>
  
  <div @click="click1()">
    <div @click="click2()">
      click me
    </div>
  </div>
</template>
