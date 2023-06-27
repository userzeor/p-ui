---
layout: doc
layoutClass: doc-layout
---

# Dialog 弹框组件

## 基本使用

<preview path="../demos/dialog/dialog-1.vue" title="基本使用" description=" "></preview>

## Dialog 组件 API

### Dialog Attributes 属性

| <div style="width: 100px">属性名</div> | 说明                 | <div style="width: 100px">类型</div> | <div style="width: 100px">可选值</div> | <div style="width: 100px">默认值</div> |
| -------------------------------------- | -------------------- | ------------------------------------ | -------------------------------------- | -------------------------------------- |
| dialogObjDelDef                        | dialog 配置参数      | Object                               | <pre> {} </pre>                        | <pre> {}</pre>                         |
| dialogVisible                          | 是否显示 Dialog      | boolean                              | true false                             | false                                  |
| title                                  | 标题                 | string                               | -                                      | -                                      |
| width                                  | Dialog 的宽度        | string                               | 'small','middle','big'                 | 'small'                                |
| successBtnText                         | 确定按钮名称         | string                               | -                                      | '确定'                                 |
| closeBtnText                           | 关闭按钮名称         | string                               | -                                      | '取消'                                 |
| draggable                              | 是否 可拖拽          | boolean                              | -                                      | false                                  |
| isFooter                               | 是否显示底部按钮     | boolean                              | -                                      | true                                   |
| appendToBody                           | 是否嵌套弹框         | boolean                              | -                                      | true                                   |
| innerBtnText                           | 嵌套弹框 title       | string                               | -                                      | -                                      |
| successInnerBtnText                    | 嵌套弹框确定按钮名称 | string                               | -                                      | '确定'                                 |
| closeInnerBtnText                      | 嵌套弹框取消按钮名称 | string                               | -                                      | '取消'                                 |
| innerDraggable                         | 嵌套弹框是否拖拽     | boolean                              | -                                      | true                                   |

### Dialog Methods 方法

| <div style="width: 100px">方法名</div> | 说明 | <div style="width: 100px">参数</div> | <div style="width: 100px">返回值</div> |
| -------------------------------------- | ---- | ------------------------------------ | -------------------------------------- |

### Dialog Events 事件

| <div style="width: 100px">事件名</div> | 说明               | <div style="width: 100px">类型</div> | <div style="width: 100px">返回值</div> |
| -------------------------------------- | ------------------ | ------------------------------------ | -------------------------------------- |
| dialogSuccessDef                       | 点击确定回调按钮   | function                             |                                        |
| dialogCloseDef                         | 点击取消回调按钮   | function                             |                                        |
| dialogInnerSuccessDef                  | 嵌套框确定回调按钮 | function                             |                                        |
| dialogInnerCloseDef                    | 嵌套框取消回调按钮 | function                             |                                        |

### Dialog Exposes 抛出

| <div style="width: 100px">名称</div> | 说明 | <div style="width: 100px">类型</div> |
| ------------------------------------ | ---- | ------------------------------------ |

### Dialog Slots 插槽

| <div style="width: 100px">插槽名</div> | 说明 | <div style="width: 100px">返回值</div> |
| -------------------------------------- | ---- | -------------------------------------- |
