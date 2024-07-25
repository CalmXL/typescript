
// 模块不会混用, es6 下引用 commonjs 不合适

// 在 ts 语法中,有一种模块化方式

// export = | import xx = 

import { a, Home, Zoo } from './a'
// console.log(a);

// 开发全部使用 import export 
// 写声明文件的时候, 如果模块是 commonjs, 或者想快速的导出一个值可以采用 ts 语法

// import x = require('xxx')
// 使用 es 模块方式导入

// 2) namespace

// namespace Zoo {
//   export let dog: string = 'zoo dog';
// }

// namespace Zoo {
//   export let cat: string = 'zoo cat';
// }


// namespace Home {
//   export let dog: string = 'home dog';
// }


console.log(Zoo.dog);
console.log(Home.dog);
console.log(Home.X.dog);

