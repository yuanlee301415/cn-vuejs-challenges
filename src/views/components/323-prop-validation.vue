<script setup>
defineProps({
  type: {},
})
</script>

<template>
  <h2>请验证Button组件的Prop类型 ，使它只接收: primary | ghost | dashed | link | text | default ，且默认值为default。</h2>
  <button>Button</button>
</template>
