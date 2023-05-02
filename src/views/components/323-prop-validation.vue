<script setup>
defineProps({
  type: {
    validator(value) {
      return ['primary', 'ghost', 'dashed', 'link', 'text', 'default'].includes(value)
    },
    default: 'default'
  },
})
</script>

<template>
  <h2>请验证Button组件的Prop类型 ，使它只接收: primary | ghost | dashed | link | text | default ，且默认值为default。</h2>
  <button>Button</button>
</template>
