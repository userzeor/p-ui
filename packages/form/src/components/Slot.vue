<template>
  <div class="com-container">
    <slot :name="itemConfig.slotName"></slot>
  </div>
</template>

<script setup name="Slot">
const props = defineProps({
  /** 传入的json的当前项的配置 */
  itemConfig: {
    type: Object,
    default: () => {}
  },
  /** 父组件的实例 */
  instance: {
    type: Object,
    default: () => {}
  }
})
</script>
<style lang="scss" scoped></style>
