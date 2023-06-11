# pui

## pnpm + monorepo 搭建组件库

p-ui/
|- cli/ // 自动生成组件以及自动根据注释更新文档的一些脚本目录
|- docs/ // 组件文档目录
|- example/ // 案例目录
|- lib/ // 组件库打包后的目录
|- packages/ // 组件库源代码目录

## 指定安装来源

pnpm install --registry <http://localhost:4873/>

## 安装组件库

pnpm install p-ui --registry <http://localhost:4873/>

## 如果提示无权限, 先登录

pnpm login --registry <http://xxxxxx>

## 修改版本号

### 最后一位（patch）版本号加1

npm version patch
​

### 中间一位（minor）版本号加1

npm version minor
​

### 第一位（major）版本号加1

npm version major

## 版本的格式

### major.minor.patch

### 主版本号.次版本号.修补版本号

### patch：修复bug，兼容老版本

### minor：新增功能，兼容老版本

### major：新的架构调整，不兼容老版本
