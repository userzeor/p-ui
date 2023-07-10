<template>
  <el-empty :description="imgData[emptyData].text" :image="imgData[emptyData].url" />
</template>

<script setup name="p-empty">
import { reactive } from 'vue'
const props = defineProps({
  emptyData: {
    type: String,
    default: '1'
  }
})
const imgData = reactive({
  1: {
    url: window.location.origin + '/demos/empty/empty-data.png',
    text: '暂无数据'
  },
  2: {
    url: window.location.origin + '/demos/empty/empty-search.png',
    text: '暂无内容'
  },
  3: {
    url: window.location.origin + '/demos/empty/empty-bugle.png',
    text: '暂无消息'
  },
  4: {
    url: window.location.origin + '/demos/empty/empty-draw.png',
    text: '暂无计划'
  },
  5: {
    url: window.location.origin + '/demos/empty/empty-email.png',
    text: '暂无邮件'
  }
})

</script>
