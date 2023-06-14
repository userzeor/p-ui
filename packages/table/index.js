import Table from './src/table.vue'

Table.name = 'p-table'

Table.install = (app) => {
  // 注册组件
  app.component(Table.name, Table)
}

export default Table
