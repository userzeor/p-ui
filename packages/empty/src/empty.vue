<template>
  <el-empty :description="description" :image="emptyImage" />
</template>

<script setup name="p-empty">
import { computed } from 'vue'
const props = defineProps({
  description: {
    type: String,
    default: () => {}
  },
  emptyImage: {
    type: String
  }
})
</script>
