<template>
  <p-steps :stepsObject="stepsObject" @nextStep="handleNextStep">
     <template #content>
            <el-step title="Step 1" description="Some description"  :icon="Edit" />
            <el-step title="Step 2" description="Some description"  />
            <el-step title="Step 3" description="Some description" />
            <el-step title="Step 4" description="Some description" />
        </template>
  </p-steps>
</template>

<script setup>
import { reactive } from 'vue'
const stepsObject = reactive({
  active: 0,
  alignCenter: true,
  direction: 'horizontal', // horizontal vertical
  simple: false,
  nextStepBtn: false
})

const handleNextStep = (val) => {
  console.log(val.value)
  if (stepsObject.active++ > 2) stepsObject.active = 0
}
</script>

<style scoped lang="scss"></style>
