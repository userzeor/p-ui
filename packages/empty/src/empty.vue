<template>
  <el-empty :description="description" :image="imgUrl" />
</template>

<script setup name="p-empty">
const props = defineProps({
  description: {
    type: String,
    default: () => {}
  },
  emptyImage: {
    type: String
  }
})

const imgUrl = new URL(
  `${props.emptyImage}`,
  import.meta.url
).href
</script>
