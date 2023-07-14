<template>
  <p-table
    ref="myTable"
    :loading="loading"
    :data="tableData"
    :columns="columns"
    :table-config="tableConfig"
    @cell-click="cellClick"
    :page-info="pageInfo"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    row-key="hosAdmNo"
    @selection-change="selectionChange"
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
    <template #age="{ row }"> sdda </template>
    <template #append> <div style="text-align: center">插入到最后</div> </template>
  </p-table>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
let tableData = ref([])
const loading = ref(false)

const getTableData = async () => {
  loading.value = true
  const res = await fetch('http://192.168.1.32:4242/hoip/page-patient-grade', {
    method: 'post',
    body: JSON.stringify({ hosAdmSpec: '', gradeId: '', ...pageInfo }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await res.json()
  loading.value = false
  console.log(data)
  tableData.value = data.records.map((val) => {
    val.status = '1'
    return val
  })
  pageInfo.total = data.total
}

const columns = [
  {
    type: 'selection',
    'reserve-selection': true
  },
  {
    prop: 'hosAdmNo',
    label: '编号'
  },
  {
    prop: 'hosPatName',
    label: '患者名称',
    align: 'center',
    children: [
      {
        prop: 'hosAdmDocName',
        label: '医生名称1',
        children: [
          {
            prop: 'age',
            label: '年龄1',
            align: 'center',
            render(h, { row }) {
              return h(
                'span',
                {
                  style: {
                    color: 'red'
                  }
                },
                row.age
              )
            }
          },
          {
            prop: 'hosAdmSpecCode',
            label: '科室编码',
            width: '80',
            type: 'expand'
          }
        ]
      },
      {
        prop: 'hosAdmDocName',
        label: '医生名称2',
        children: [
          {
            prop: 'age',
            label: '年龄2',
            slot: 'age2'
          }
        ]
      },
      {
        prop: 'hosAdmDocName',
        label: '医生名称3',
        children: [
          {
            prop: 'age',
            label: '年龄3',
            slot: 'age3'
          }
        ]
      }
    ]
  },
  {
    prop: 'age',
    label: '年龄',
    align: 'center'
  },
  {
    prop: 'status',
    label: '状态',
    width: '100',
    slot: 'status'
  },
  {
    prop: 'hosAdmSpecName',
    label: '科室',
    render(h, { row }) {
      return h(
        'span',
        {
          style: {
            color: 'red'
          }
        },
        row.hosAdmSpecName
      )
    }
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
  // isShow: false,
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
  // console.log(row, column, cell, event)
}

const myTable = ref(null)

onMounted(() => {
  console.log(myTable.value)
})

const handleStatusChange = (row) => {
  alert(row.status)
}

const selectionChange = (selection) => {
  console.log(selection)
}

getTableData()
</script>

<style scoped lang="scss"></style>
