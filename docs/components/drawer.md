---
layout: doc
layoutClass: doc-layout
---

# Drawer 抽屉组件

## 基本使用

<preview path="../demos/drawer/drawer-1.vue" title="基本使用" description=" "></preview>

## Drawer 组件 API

### Drawer Attributes 属性
  | <div style="width: 100px">属性名</div> | 说明 | <div style="width: 100px">类型</div> | <div style="width: 100px">可选值</div> | <div style="width: 100px">默认值</div> |
  | ---- | ---- | ---- | ------ | ------ |
  | drawerObject  |  抽屉配置参数  |  Object  | <pre> {} </pre> | <pre> {}</pre> |
| drawerVisible  |  抽屉是否显示  |  boolean  |  true false |  false |
| direction  |  Drawer 打开的方向  |  Direction  |  rtl / ltr / ttb / btt  |  rtl |
| size  |  Drawer 窗体的大小  |  Drawer 窗体的大小  |  -  |  '30%' |
### Drawer Methods 方法
  | <div style="width: 100px">方法名</div> | 说明 | <div style="width: 100px">参数</div> | <div style="width: 100px">返回值</div> |
  | ------ | ---- | ---- | ------ |
  ### Drawer Events 事件
  | <div style="width: 100px">事件名</div> | 说明 | <div style="width: 100px">类型</div> | <div style="width: 100px">返回值</div> |
  | ------ | ---- | ---- | ------ |
  ### Drawer Exposes 抛出
  | <div style="width: 100px">名称</div> | 说明 | <div style="width: 100px">类型</div> |
  |  ----  | ----  | ----  |
  ### Drawer Slots 插槽
  | <div style="width: 100px">插槽名</div> | 说明 | <div style="width: 100px">返回值</div> |
  | ------ | ---- | ---- |
  | #header  |  抽屉title插槽  |  |
| #content  |  抽屉内容插槽  |  |
| #footer  |  抽屉footer插槽  |  |
