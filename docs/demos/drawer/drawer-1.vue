<template>
    <el-button type="primary" @click="handleDrawerOpen">open</el-button>
  <p-drawer :drawerObject="drawerObject" @backInnerVisible="backInnerVisible" @backVisible="backVisible" >
     <template #header>
            <div>我是头部</div>
        </template>

        <template #content>
            <div>我是内容</div>
            <div>我是内容</div>
            <div>我是内容</div>
            <div>我是内容</div>
            <el-button @click="handleInnerBtn">Click me!</el-button>
        </template>

        <template #footer>
            <div style="flex: auto">
                <el-button @click="cancelClick">取消</el-button>
                <el-button type="primary" @click="confirmClick">确认</el-button>
            </div>
        </template>
  </p-drawer>
</template>

<script setup>
import { reactive } from 'vue'
const drawerObject = reactive({
  drawerVisible: false,
  direction: 'rtl', // rtl / ltr / ttb / btt
  size: '50%',
  innerDrawer: false,
  innerDrawerSize: '20%'
})

const handleDrawerOpen = () => {
  drawerObject.drawerVisible = true
}

const cancelClick = () => {
  drawerObject.drawerVisible = false
}

const confirmClick = () => {
  drawerObject.drawerVisible = false
}

const handleInnerBtn = () => {
  drawerObject.innerDrawer = true
}

const backInnerVisible = () => {
  drawerObject.innerDrawer = false
}

const backVisible = () => {
  drawerObject.drawerVisible = false
}
</script>

<style scoped lang="scss"></style>
