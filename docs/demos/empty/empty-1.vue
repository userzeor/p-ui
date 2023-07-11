<template>
  <p-empty :empty-type="emptyType" empty-image-url="/demos/empty/images/">
    <el-button type="primary">Button</el-button>
    <!-- <template #image> imgage </template> -->
    <template #description> 提示文字 </template>
  </p-empty>
</template>

<script setup>
const emptyType = '1'
</script>

<style scoped lang="scss"></style>
