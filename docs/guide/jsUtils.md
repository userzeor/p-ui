# js 工具包

## p-ui 库里已经集成打包一些用到的常用工具包

# 如何使用如下

```js
import { deepAssign } from 'p-ui/lib/utils'
console.log(deepAssign({ a: 1 }, { b: 3 }))
```

## 所有方法介绍

<!-- deepAssign start -->

### **deepAssign**

**<font size="3"> 深度合并多个对象的方法 </font>**

**参数**

1.  {} json 对象
2.  ...args 是一个参数列表表示可以传多个参数对象

**返回值**

**<font size="3"> {Object} </font>**

**例子**

```js
 deepAssign(Object, Object, ...)
deepAssign({}, { a: 1 }, { b: 3 })

```

<!-- deepAssign end -->

<!-- emitter start -->

### **emitter**

**<font size="3"></font>**

**参数**

**返回值**

**<font size="3"></font>**

**例子**

```js

```

<!-- emitter end -->

<!-- isArray start -->

### **isArray**

**<font size="3"></font>**

**参数**

1.  {Array} arg

**返回值**

**<font size="3">s {Boolean}</font>**

**例子**

```js

```

<!-- isArray end -->
