# Form form 表单组件

## 基本使用

<preview path="../demos/form/form-1.vue" title="基本使用" description=" "></preview>

## Form 组件 API

### Form Attributes 属性
  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- | ---- | ---- | ------ | ------ |
  | formConfig  |  表单组件配置  |  Object  |  {}  |  {<br/>    sdad: dad<br/>  } |
| formData  |  表单数据  |  Object  |  {}  |  {} |
| formInfo  |  表单信息  |  Object  |  {}  |  {} |
### Form Methods 方法
  | 方法名 | 说明 | 参数 | 返回值 |
  | ------ | ---- | ---- | ------ |
  | submit  |  提交数据  |  Object  |  void |
### Form Events 事件
  | 事件名 | 说明 | 参数 | 返回值 |
  | ------ | ---- | ---- | ------ |
  | click  |  点击  |  function  |  {}  |  {} |
### Form Exposes 抛出
  | 名称 | 说明 | 类型 |
  |  ----  | ----  | ----  |
  | value  |  form的值  |  Object |
### Form Slots 插槽
  | 插槽名 | 说明 | 参数 |
  | ------ | ---- | ---- |
  | 上传  |  form的上传组件插槽  |  Object |
