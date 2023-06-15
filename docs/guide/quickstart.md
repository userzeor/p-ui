# 快速开始

## 当前组件库基于 ElementPlus 做的二次封装，安装 p-ui 前需安装 ElementPlus

## 用法

```shell
pnpm install p-ui --registry http://localhost:4873/
```

## 全局安装组件库，在 main 里加入以下代码

```js
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import PUI from 'p-ui'

import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(PUI)
app.mount('#app')
```
