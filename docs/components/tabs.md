---
layout: doc
layoutClass: doc-layout
---

# Tabs 标签页

## 基本使用

<preview path="../demos/tabs/tabs-1.vue" title="基本使用" description=" "></preview>

## Tabs 组件 API

### Tabs Attributes 属性
  | <div style="width: 100px">属性名</div> | 说明           | <div style="width: 100px">类型</div> | <div style="width: 100px">可选值</div>                                                  | <div style="width: 100px">默认值</div> |
  | -------------------------------------- | -------------- | ------------------------------------ | --------------------------------------------------------------------------------------- | -------------------------------------- |
  | tabList                                | tabs配置参数   | arr                                  | [{<br/>         label: "",<br/>        name: "",<br/>        dropdownMenu:[]<br/>    }] | []                                     |
  | label                                  | tabs选项卡名称 | object                               | []                                                                                      | []                                     |
  | dropdownMenu                           | tab下拉框内容  | arr                                  | [{label:"",value:""}]                                                                   | []                                     |
  | activeName                             | 默认选中框     | -                                    | tabList[0].name                                                                         | []                                     |
  | tabType                                | 风格类型       | string                               | card/border-card                                                                        | —                                      |
### Tabs Methods 方法
  | <div style="width: 100px">方法名</div> | 说明 | <div style="width: 100px">参数</div> | <div style="width: 100px">返回值</div> |
  | -------------------------------------- | ---- | ------------------------------------ | -------------------------------------- |
  ### Tabs Events 事件
  | <div style="width: 100px">事件名</div> | 说明 | <div style="width: 100px">类型</div> | <div style="width: 100px">返回值</div> |
  | -------------------------------------- | ---- | ------------------------------------ | -------------------------------------- |
  ### Tabs Exposes 抛出
  | <div style="width: 100px">名称</div> | 说明 | <div style="width: 100px">类型</div> |
  | ------------------------------------ | ---- | ------------------------------------ |
  ### Tabs Slots 插槽
  | <div style="width: 100px">插槽名</div> | 说明 | <div style="width: 100px">返回值</div> |
  | -------------------------------------- | ---- | -------------------------------------- |