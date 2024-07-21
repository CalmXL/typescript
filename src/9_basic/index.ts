// Ts 中的条件类型以及类型层级
// 和泛型约束通常一起使用，类似三元运算符， 泛型约束是用来约束泛型的，条件是用来判断的

// type ResStatusMessage<T extends number> = T extends 200 | 204 | 206 ? 'success' : 'failed'; 

// type R1 = ResStatusMessage<123>;


// type Conditional<T, U> = T extends U ? 'success' : 'failed';

// type R2 = Conditional<'xulei', string>;
// type R3 = Conditional<123, string>;

// interface Bird {
//   name: '鸟'
// }

// interface Fish {
//   name: '鱼'
// }

// interface Sky {
//   name: '天空'
// }

// interface Water {
//   name: '水'
// }

// type Conditional1<T> = T extends Bird ? Sky : Water;

// type R4 = Conditional1<Fish>

// ---------------------------------------------------
// 泛型一般代表输入是不确定的(无限的), 函数重载(有限的)

// function sum<T extends number | string> (a: T, b: T): T {
//   // 运算符 + 不能用于 T + T
//   return a + b;
// }

// type FormatReturnVal<T extends string | number> =
//   T extends string
//   ? string
//   : T extends number
//   ? number
//   : never;

// function sum<T extends number | string>(a: T, b: T): FormatReturnVal<T> {
//   // 泛型之间不能做 数学运算
//   return a + (b as any);
// }

// let r = sum(1, 2);

// ---------------------------------------------------------------

// 条件运算符，就可以掌握 ts 中的兼容性 以及类型的层级
// 兼容性: 就是可以将一个值赋予给另一个值
// 类型层级: 低的层级可以赋值给高的层级

type R1 = 'abc' extends string ? true : false;
type R2 = 123 extends number ? true : false;
type R3 = true extends boolean ? true : false;


let r1: string = 'abc';
let r2: number = 123;

type R4 = 'a' extends 'a' | 'b' | 'c' ? true : false;
type R5 = 1 extends 1 | 2 | 3 ? true : false;
type R6 = true extends true | false ? true : false;

// 字面量类型可以赋予给基础类型
// 字面量类型可以赋值给字面量的联合类型
let r4: 'a' | 'b' | 'c' = 'a';

type R7 = string extends String ? true : false;
type R8 = number extends Number ? true : false;
type R9 = boolean extends Boolean ? true : false;
type R10 = boolean extends Object ? true : false;

// 基础类型是包装类型的子类型
let obj: Object = {};

// any unknown 是最大类型
type R11 = Object extends any ? true : false;
type R12 = Object extends unknown ? true : false;
type R13 = never extends 'abc' ? true : false;

// never < 字面量 < 字面量联合类型 < 字面量类型 < 基础数据类型 < 原始数据类型 < 包装类型 < Object < any | unknown


// 针对 any 来说，永远返回的是成功和失败的联合类型
type R14 = any extends Object ? true : false;

type R15 = unknown extends 'abc' ? true : false; // => false
type R16 = any extends any ? true : false; // 自己和自己比永远不会出错


// 类型层面上的，低类型可以赋予给高类型
// 从结构上考虑 交叉类型可以赋予 交叉前的类型

// {} 字面量 也是一个空对象 object 只能赋予对象

type R17 = {} extends object ? true : false;
type R18 = {} extends Object ? true : false;

type R19 = object extends {} ? true : false;
type R20 = Object extends {} ? true : false;


// ts 默认 object 和 Object 都可以相互赋值
type R21 = Object extends object ? true : false;
type R22 = object extends Object ? true : false;



export {}