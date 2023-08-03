# 快速开始

## <span style="color:red">开始使用pui之前确定是否node版本为18或者以上，如果没有建议安装nvm node版本管理工具,并卸载掉原来安装的node版本，用nvm安装node</span>

## 1. 启动本地私服

```shell
pnpm run start:verdaccio
```

## 2. 添加本地私服账号

```shell
pnpm adduser --registry <http://localhost:4873/>
```

### <span style="color:red">执行 pnpm adduser --registry http://localhost:4873/ 报 Web login is not supported for verdaccio.的话</span>

```shell
pnpm adduser --auth-type=legacy --registry http://localhost:4873/
```

## 3. 添加完账户用注册的账号登录私服网站

## 4. 运行如下命令进行库打包以及自动累加版本号，并推送到本地私服

```shell
pnpm run pub:release
```

## 5. 查看本地私服网站是否库的版本已经更新

## 6. 运行如下命令安装或者更新私服

```shell
pnpm install --registry http://localhost:4873/ # 指定安装来源为本地私服
pnpm install p-ui --registry http://localhost:4873/ # 安装pui
pnpm update p-ui --registry http://localhost:4873/ # 更新pui
```

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
