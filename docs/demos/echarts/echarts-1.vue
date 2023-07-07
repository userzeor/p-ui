<template>
  <p-echarts :echartObject="echartObject" :option="option"></p-echarts>

</template>

<script setup>
import { reactive } from 'vue'
const echartObject = reactive({
  width: '100%',
  height: '420px'
})

const option = reactive({
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      areaStyle: {}
    }
  ]
})
</script>

<style scoped lang="scss"></style>
