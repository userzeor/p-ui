<template>
  <p-empty :description="description" :emptyImage="emptyImage"></p-empty>
</template>

<script setup>
const description = '我是空数据'

const emptyImage = window.location.origin + '/demos/empty/empty-data.png'
</script>

<style scoped lang="scss"></style>
