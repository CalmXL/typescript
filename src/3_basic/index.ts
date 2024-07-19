// 以赋予值的结果来进行 内容推导

// let name = 'xulei';
// let age = 10;

// let const
// const age = 30; // 如果用常量，来自动推导类型就是字面类型

// let name: string | number;

// 默认没有赋值的时候，联合类型可以调用公共的方法, why？ 为了安全
// name = 'xulei';
// name.toUpperCase()

// name = 123; // 赋值后会推导类型
// name.toFixed(2);

// 字面量类型
// type Direction  = 'up' | 'down' | 'left' | 'right';
// let dir:Direction = 'up';


// type 中定义了使类型， 不是对象
// type women = {
//   wealthy: true;
//   waste: string;
// } | {
//   wealthy: false;
//   normality: string;
// }

// 可以利用联合类型来做到属性之间的互斥
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
let ele = document.getElementById('app');
(ele as HTMLElement).innerText = '1234';
(<HTMLElement>ele).style.background = 'red'; // 不推荐

// 断言出问题了，后果需要自负， 有可能会出现问题

// 双重断言 可以吧一个值先断言 any, 在断言成某个类型
// any 类型可以赋予给任何类型

let str: string | number;

(str! as any) as boolean

// ? js 可选链操作符

export {};