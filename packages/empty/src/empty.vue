<template>
  <el-empty
    :description="imgData[emptyType].text"
    :image="$slots['image'] ? '' : imgData[emptyType].url"
    :image-size="emptyImageSize"
  >
    <template v-for="(slotFun, slotName) in $slots" #[slotName]>
      <slot v-if="$slots[slotName]" :name="slotName"></slot>
    </template>
  </el-empty>
</template>

<script setup name="p-empty">
import { reactive } from 'vue'
const props = defineProps({
  emptyType: {
    type: String,
    default: '1'
  },
  emptyImageSize: {
    type: Number,
    default: 198
  },
  emptyImageUrl: {
    type: String,
    default: ''
  }
})

const imgData = reactive({
  1: {
    url: props.emptyImageUrl + 'empty-data.png',
    // url: new URL('../images/empty-data.png', import.meta.url).href,
    text: '暂无数据'
  },
  2: {
    url: props.emptyImageUrl + 'empty-search.png',
    // url: new URL('../images/empty-search.png', import.meta.url).href,
    text: '暂无内容'
  },
  3: {
    url: props.emptyImageUrl + 'empty-bugle.png',
    // url: new URL('../images/empty-bugle.png', import.meta.url).href,
    text: '暂无消息'
  },
  4: {
    url: props.emptyImageUrl + 'empty-draw.png',
    // url: new URL('../images/empty-draw.png', import.meta.url).href,
    text: '暂无计划'
  },
  5: {
    url: props.emptyImageUrl + 'empty-email.png',
    // url: new URL('../images/empty-email.png', import.meta.url).href,
    text: '暂无邮件'
  }
})
</script>

<style lang="scss" scoped>
:deep(.el-empty__description) {
  --el-empty-description-margin-top: -10px;
  font-size: 16px;
  font-family: Microsoft YaHei-Regular, Microsoft YaHei;
  font-weight: 400;
  color: rgba(102, 102, 102, 0.85);
}
</style>
