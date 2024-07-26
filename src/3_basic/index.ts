// 以赋予值的结果来进行 内容推导

// 1). let const 对于推导的不同
// 如果用常量，来自动推导类型就是字面量类型, 使用 let 则会进行推导

// let name = 'xulei';
// let age = 10;

// const age = 30;
// type ageT = typeof age; // => 30


// 2). 默认没有赋值的时候，联合类型可以调用公共的方法, 赋值后会推导类型,提供对应的方法
// why？ 为了安全

let name: string | number;

// // 赋值后会推导类型
// name = 'xulei';
// name.toUpperCase()

// name = 123; 
// name.toFixed(2);

// 3). 字面量类型, 可以在类型位置引用 特定的字符串和数字
// 字面量组合联合,可以有更多的用处

// 字符串字面量
// type Direction  = 'up' | 'down' | 'left' | 'right';
// let dir:Direction = 'up';

// 数字字面量
// function compare(a: string, b: string): -1 | 0 | 1 {
//   return a === b ? 0 : a > b ? 1 : -1;
// } 

// 非字面量结合
// interface Options {
//   width: number;
// }

// function configure (x: Options | 'auto') {

// }

// configure({ width: 200 })
// configure('auto');
// configure('automatic') // -> x

// 布尔字面量 true 和 false

// 4). 字面推断
// const obj = { counter: 0 };

// if (someCondition) {
//   obj.counter = 1;
// }


// declare function handleRequest (
//   url: string,
//   method: 'GET' | 'POST'
// ): void;

// const req = { 
//   url: 'http://www.baidu.com',
//   method: 'GET'
// } as const;

/**
 * req.method 会被推断为 string, 而不是 GET
 * 
 * 解决办法:
 *    1. 类型断言 req.method as 'GET';
 *    2. 使用 as const 将整个对象转换为 字面量类型, as const 后缀的作用类似于 const, 
 *        但用于类型系统,确保为所有属性分配字面类型,而不是更通用的版本
 */
// handleRequest(req.url, req.method)


// 5). type 中定义的是类型， 不是对象
// type women = {
//   wealthy: true;
//   waste: string;
// } | {
//   wealthy: false;
//   normality: string;
// }

// 6). 联合类型
/**
 * 联合类型是由两种或多种其他类型组成的类型,表示可能是这些类型中的任何一个值.
 * 我们将这些类型中的每一种都称为联合成员.
 */

/*
  function printId(id: number | string) {
    console.log(`Your ID is ${id}`);
  }
  printId(10);
  printId('11');
*/

// ts 只有在对联合的每个成员都有效的情况下才允许操作.
// function printId (id: number | string) {

//   // error:  类型“string | number”上不存在属性“toUpperCase”。
//   //         类型“number”上不存在属性“toUpperCase”
//   console.log(id.toUpperCase());

// }
// 解决方案就是 代码缩小联合
// ts 可以根据代码的结构为某个值推断出更具体的类型,就会发生类型缩小

// 可以使用 typeof | Array.isArray
function printId(id: number | string) {

  if (typeof id === 'number') {
    console.log(id);
    return;
  }

  console.log(id.toUpperCase());
}

function welcomePeople(p: string | string[]) {
  if (Array.isArray(p)) {
    console.log('hello' + p.join(' - '));
  } else {
    console.log('hello ' + p);

  }
}

// 联合类型来做到属性之间的互斥
// let richWomen: women = {
//   wealthy: true,
//   waste: '浪费'
// }

// let  poorWomen: women = {
//   wealthy: false,
//   normality:'节俭'
// }

// 类型断言(非空断言 这个值一定不为空)
// let ele = document.getElementById('app');
// ele!.innerText = '1234';

// ele!.style.background; // 

// as 断言 可以强制把某个类型
// let ele = document.getElementById('app');
// (ele as HTMLElement).innerText = '1234';
// (<HTMLElement>ele).style.background = 'red'; // 不推荐

// 断言出问题了，后果需要自负， 有可能会出现问题

// 双重断言 可以吧一个值先断言 any, 在断言成某个类型
// any 类型可以赋予给任何类型

// let str: string | number;

// (str! as any) as boolean

// ? js 可选链操作符

export { };