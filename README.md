# pui

## pnpm + monorepo 搭建组件库
## 在线地址：https://userzeor.github.io/p-ui/

```md
p-ui/
|- cli/ // 自动生成组件以及自动根据注释更新文档的一些脚本目录
|- docs/ // 组件文档目录
|- example/ // 案例目录
|- lib/ // 组件库打包后的目录
|- packages/ // 组件库源代码目录
```

## 添加账户

### <http://localhost:4873/> 代表启动的私服地址

```shell
pnpm adduser --registry <http://localhost:4873/>
```

## 发布组件库到私服

```shell
pnpm publish --registry <http://localhost:4873/>
```

## 指定安装来源

```shell
pnpm install --registry <http://localhost:4873/>
```

## 安装组件库

```shell
pnpm install p-ui --registry <http://localhost:4873/>
```

## 如果提示无权限, 先登录

```shell
pnpm login --registry <http://xxxxxx>
```

## 修改版本号

### 最后一位（patch）版本号加 1

```shell
pnpm version patch
```

### 中间一位（minor）版本号加 1

```shell
pnpm version minor
```

### 第一位（major）版本号加 1

```shell
pnpm version major
```

## 版本的格式

### major.minor.patch

### 主版本号.次版本号.修补版本号

### patch：修复 bug，兼容老版本

### minor：新增功能，兼容老版本

### major：新的架构调整，不兼容老版本

## <font color="red">故障排除</font>

## 执行 pnpm adduser --registry <http://localhost:4873/> 报 Web login is not supported for verdaccio.的话

```shell
pnpm adduser --auth-type=legacy --registry http://localhost:4873/
```
