<template>
  <el-card class="box-card" :shadow="shadow">
    <template #header>
      <slot name="header"> </slot>
    </template>

    <slot name="content"> </slot>
  </el-card>
</template>

<script setup name="p-card">
const props = defineProps({
  shadow: {
    type: Object,
    default: () => {}
  }
})
</script>
