// 类型声明

// 有些代码是使用 cdn 引入的, 或者有些包用 js 来写的没有提示.
// 添加声明文件, 为了统一管理而且不影响核心代码, 我们将声明的内容都放入.d.ts 文件
// 我们写好的内容 放到 .d.ts 中, ts 默认会检测当前项目下所有的 .d.ts 文件

// let age = 1;

// let a = sum(1, 2);

// console.log(a);

// mitt 
import mitt from 'mitt';

mitt.on('abc', () => {
  console.log('abc');
})

mitt.emit('abc', 'a', 'b', 'c');

// 非 js 或者 ts 后缀的

import jpg from 'a.jpg';

// $('.123').width

/**
 * 查找第三方模块的规则:
 * 1. node_modules/xxx/package.json => exports: {}
 * 2. node_modules/xxx/index.d.ts
 * 3. node_modules/@types/index.d.ts
 */



export { };