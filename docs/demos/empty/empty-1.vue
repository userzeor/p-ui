<template>
  <p-empty :emptyType="emptyType">
    <el-button type="primary">Button</el-button>
    <!-- <template #image> imgage </template> -->
    <template #description> 提示文字 </template>
  </p-empty>
</template>

<script setup>
const emptyType = '2'
</script>

<style scoped lang="scss"></style>
