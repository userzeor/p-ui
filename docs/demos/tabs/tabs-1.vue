<template>
  <p-tabs
    :tabList="tabList"
    :activeName="tabList[0].name"
    :tabType="tabType"
    @backMessage="bcakMessage"
  >
    <template #first>
      <div>我是first内容</div>
    </template>

    <template #second>
      <div>我是second内容</div>
    </template>
  </p-tabs>
</template>

<script setup >
import { reactive } from 'vue'
const tabList = reactive([
  {
    label: '选项卡一',
    name: 'first'
  },
  {
    label: '选项卡二',
    name: 'second'
  },
  {
    label: '选项卡三',
    name: '3'
  },
  {
    label: '选项卡四',
    name: '4'
  },
  {
    label: '选项卡五',
    name: '5'
  },
  {
    label: '选项卡六',
    name: '6'
  },
  {
    label: '选项卡七',
    name: '7'
  },
  {
    label: '人员概要',
    name: 'fourth',
    dropdownMenu: [
      {
        label: '人员1',
        value: 'person1'
      },
      {
        label: '人员2',
        value: 'person2'
      },
      {
        label: '人员3',
        value: 'person3'
      },
      {
        label: '人员4',
        value: 'person4'
      }
    ]
  }
])

// const dropdownShow = true

// card border-card
const tabType = 'border-card'

const bcakMessage = (val) => {
  console.log(val, 2233)
}
</script>

<style scoped lang="scss"></style>
