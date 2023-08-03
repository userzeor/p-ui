<template>
  <el-button type="primary" @click="handleDrawerOpen">open</el-button>

  <p-drawer :drawerObject="drawerObject" @backVisible="backVisible">
    <template #header>
      <div>我是头部</div>
    </template>

    <template #content>
      <div>我是内容</div>
      <div>我是内容</div>
      <div>我是内容</div>
      <div>我是内容</div>
      <el-button @click="handleInnerBtn">Click me!</el-button>

      <el-drawer
        v-model="innerDrawer"
        title="I'm inner Drawer"
        :append-to-body="true"
        :before-close="handleInnerClose"
        size="20%"
      >
        <p>_(:зゝ∠)_</p>
      </el-drawer>
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
import { reactive, ref } from 'vue'
import { ElMessageBox } from 'element-plus'
const drawerObject = reactive({
  drawerVisible: false
})
const innerDrawer = ref(false)

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
  innerDrawer.value = true
}

const backVisible = () => {
  ElMessageBox.confirm('确认关闭抽屉?')
    .then(() => {
      drawerObject.drawerVisible = false
    })
    .catch(() => {
      // catch error
    })
}

const handleInnerClose = () => {
  ElMessageBox.confirm('确定关闭嵌套抽屉?')
    .then(() => {
      innerDrawer.value = false
    })
    .catch(() => {
      // catch error
    })
}
</script>

<style scoped lang="scss"></style>
