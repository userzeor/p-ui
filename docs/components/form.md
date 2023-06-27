---
layout: doc
layoutClass: doc-layout
---

# Form form 表单组件

## 基本使用

<preview path="../demos/form/form-1.vue" title="基本使用" description=" "></preview>

## Form 组件 API

### Form Attributes 属性

| <div style="width: 100px">属性名</div> | 说明                    | <div style="width: 100px">类型</div> | <div style="width: 100px">可选值</div>                                                                                                                                                            | <div style="width: 100px">默认值</div> |
| -------------------------------------- | ----------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| v-model/modelValue                     | form 表单绑定的数据     | Object                               | <pre> {} </pre>                                                                                                                                                                                   | <pre> {}</pre>                         |
| options                                | form 表单每个控件的配置 | Array                                | form 表单每一项的可选类型:<br/> input radio checkbox select<br/> datePicker timePicker timeSelect inputNumber<br/> colorPicker rate slider transfer<br/> upload cascader autocomplete hidden<br/> | []                                     |
| formConfig                             | form 表单本身的配置     | Object                               | <pre> {<br/> form: {<br/> ref: 'myform'<br/> },<br/> row: {<br/> //栅格间隔<br/> gutter: 16<br/> },<br/> submitBtn: {},<br/> resetBtn: {},<br/> info: {},<br/> wrap: {}<br/> } </pre>             | <pre> {}</pre>                         |

### Form Methods 方法

| <div style="width: 100px">方法名</div> | 说明 | <div style="width: 100px">参数</div> | <div style="width: 100px">返回值</div> |
| -------------------------------------- | ---- | ------------------------------------ | -------------------------------------- |

### Form Events 事件

| <div style="width: 100px">事件名</div> | 说明                                                            | <div style="width: 100px">类型</div> | <div style="width: 100px">返回值</div>           |
| -------------------------------------- | --------------------------------------------------------------- | ------------------------------------ | ------------------------------------------------ |
| submit                                 | form 表单提交事件支持两种触发方式，点击提交和任意表单项回车触发 | function                             | 返回 valid 参数，类型为 Boolean 值为表单校验结果 |

### Form Exposes 抛出

| <div style="width: 100px">名称</div> | 说明                                  | <div style="width: 100px">类型</div> |
| ------------------------------------ | ------------------------------------- | ------------------------------------ |
| exposeObj                            | 返回的定义的每一项的 ref 和表单的 ref | Object                               |

### Form Slots 插槽

| <div style="width: 100px">插槽名</div>  | 说明                     | <div style="width: 100px">返回值</div>                                    |
| --------------------------------------- | ------------------------ | ------------------------------------------------------------------------- |
| slotName(此为 options 项里传入的插槽名) | 自定义 form 表单的某一项 | options(表单所有的项) formConfig(表单的配置) curVal(当前 form 表单项的值) |
