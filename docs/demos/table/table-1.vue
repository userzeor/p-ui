<template>
  <p-table
    ref="myTable"
    :data="tableData"
    :columns="columns"
    :table-config="tableConfig"
    @cell-click="cellClick"
    :page-info="pageInfo"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  >
    <template #hosPatGender="{ row, column, columnIndex, $index }">
      {{ row.hosPatGender }}
      {{ column.label }}
      {{ columnIndex }}
      {{ $index }}
      <el-button type="primary">操作</el-button>
    </template>
    <template #status="{ row }">
      <el-switch
        v-model="row.status"
        active-value="0"
        inactive-value="1"
        @change="handleStatusChange(row)"
      ></el-switch>
    </template>
    <template #append> <div style="text-align: center">插入到最后</div> </template>
  </p-table>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
let tableData = ref([])

const getTableData = async () => {
  const res = await fetch('http://192.168.1.32:4242/hoip/page-patient-grade', {
    method: 'post',
    body: JSON.stringify({ hosAdmSpec: '', gradeId: '', ...pageInfo }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json()
  console.log(data)
  tableData.value = data.records.map((val) => {
    val.status = '1'
    return val
  })
  pageInfo.total = data.total
}

const columns = [
  {
    type: 'selection'
  },
  {
    prop: 'hosAdmNo',
    label: '编号'
  },
  {
    prop: 'hosPatName',
    label: '患者名称'
  },
  {
    prop: 'age',
    label: '年龄'
  },
  {
    prop: 'status',
    label: '状态',
    width: '100',
    slot: 'status'
  },
  {
    prop: 'hosAdmSpecName',
    label: '科室'
  },
  {
    prop: 'hosPatGender',
    label: '性别',
    slot: 'hosPatGender'
  }
]

const tableConfig = {
  ref: 'elTable'
}

const pageInfo = reactive({
  pageSize: 10,
  pageNo: 1,
  total: 0
})

// 分页大小变化的事件
const handleSizeChange = (size) => {
  pageInfo.pageSize = size
  getTableData()
  console.log(size)
}

// 当前页变化的事件
const handleCurrentChange = (cur) => {
  pageInfo.pageNo = cur
  getTableData()
  console.log(cur)
}

const cellClick = (row, column, cell, event) => {
  console.log(row, column, cell, event)
}

const myTable = ref(null)

onMounted(() => {
  console.log(myTable.value)
})

const handleStatusChange = (row) => {
  alert(row.status)
}

getTableData()
</script>

<style scoped lang="scss"></style>
