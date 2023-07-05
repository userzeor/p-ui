<template>
  <el-steps
    :active="active"
    finish-status="success"
    :align-center="stepsObject.alignCenter"
    :direction="stepsObject.direction"
    :simple="stepsObject.simple"
  >
    <slot name="content"></slot>
  </el-steps>

  <el-button style="margin-top: 12px" @click="next" v-if="stepsObject.nextStepBtn"
    >Next step</el-button
  >
</template>

<script setup name="p-steps">
import { computed } from 'vue'
const emits = defineEmits(['nextStep'])
const props = defineProps({
  stepsObject: {
    type: Object,
    default: () => {}
  }
})

const active = computed(() => {
  return props.stepsObject.active
})

const next = () => {
  emits('nextStep', active)
  //  if (active.value++ > 2) active.value = 0
}
</script>
