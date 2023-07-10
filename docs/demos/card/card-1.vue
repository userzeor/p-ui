<template>
  <p-card :shadow="cardShadow">
    <template #header>
      <div class="card-header">
        <span>我是头部</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>

    <template #content>
      <div>我是内容</div>
    </template>
  </p-card>
</template>

<script setup>
const cardShadow = 'always' // always  hover  never
</script>

<style scoped lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>
