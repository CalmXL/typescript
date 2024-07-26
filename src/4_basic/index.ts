// 函数类型

// 1. 函数类型表达式 
// 函数有入参 和 返回值 (针对这个部分)
// 参数类型注解 和 返回类型注解
// function greeter(fn: (a: string) => void) {
//   fn('Hello World');
// }

// function printToConsole(s: string) {
//   console.log(s);
// }

// greeter(printToConsole);


// function sum(a: string, b:string):string {
//   return a + b;
// }

// let sum = (a: string, b : string):string => {
//   return a + b;
// }

// 返回 Promise 的函数
// async function getFavoriteNumber(): Promise<number> {
//   return 12;
// }

// 类型别名定义函数
// type Sum = (a: string, b:string) => string
// let sum:(a: string, b:string) => string = (a, b) => {
//   return a + b;
// }
// let sum: Sum = (a, b) => {
//   return a + b;
// }

// sum('1', '2');

// 1. 根据赋值类进行推导
// 2. 根据返回值来进行类型推导
// 3. 会根据上下文类型来推导
// void 不关心 返回值的具体类型 
// type ICallback = (a: string, b:number, c: boolean) => string;
// type ICallback = (a: string, b:number, c: boolean) => void;


// function fn(callback: ICallback) {}

// fn((x, y, z) => {
//   return {} 
// })

// let r = [1, 2, 3].forEach(item => item)


// 函数中的可选参数
// ? 表示可选参数
// = 表示默认值

// let sum = (a: string, b?: string):string => {
//   return a + b;
// }
// let sum = (a: string = "b", b: string):string => {
//   return a + b;
// }

// const res = sum(undefined, '1');
// console.log(res);

// // 函数的剩余参数
// let total = (...rest:number[]): number => {
//   return rest.reduce((memo, current) => {
//     memo += current;
//     return current
//   });
// }

// let person = {
//   name: 'xulei',
//   age: 20
// }

// 可以采用 ts 中的 typeof 来获取变量的类型
// ts 中的 this 类型需要手动指定，默认是函数的第一个参数
// keyof 类型运算符 只能查询类型
// type IThis = typeof person
// function getVal(this: IThis, key: keyof IThis) {
//   return this[key]
// }

// let r = getVal.call(person, 'name');
// console.log(r);


// 重载(一般是有限的操作) ts 中的重载是伪重载 类型的重载
// function toArray(value: string): string[];
// function toArray(value: number): number[];
// function toArray(value: number | string) {
//   if (typeof value === 'string') {
//     return value.split('');
//   } else if (typeof value === 'number') {
//     return value.toString().split("").map(Number)
//   }
// }

// let res = toArray(123);
// let res2 = toArray('123');

// 函数中 参数类型，返回值类型，类型推导方式、可选、默认，this, rest，重载

export { };

// doc 部分

// 1). 调用签名
// 函数类型表达式语法不允许声明属性. 如果我们想用属性描述可调用的东西,我们可以在对象类型中编写调用签名

// 注意: 与函数类型表达式不同, 参数列表与返回类型之间使用 : 而不是 => 
// type DescFunc = {
//   description: string;
//   (arg: number): boolean;
// }

// function doSth (fn: DescFunc) {
//   console.log(fn.description + ' returned ' + fn(6));
// }

// // function myFunction (num: number) {
// //   return num > 3;
// // }

// const myFunction: DescFunc = (num: number) => {
//   return num > 3;
// }

// myFunction.description = 'default description';

// doSth(myFunction);

// 2). 构造签名

// type SomeConstructor = {
//   new (s: string): Object;
// }

// function fn(ctor: SomeConstructor) {
//   return new ctor('hello');
// }

// 3). 约束值的常见错误
// function minimumLength<T extends { length: number }>(
//   obj: T,
//   minimum: number
// ): T {
//   if (obj.length > minimum) {
//     return obj;
//   } else {

//     // 不能将类型“{ length: number; }”分配给类型“T”。
//     // "{ length: number; }" 可赋给 "T" 类型的约束，但可以使用约束 "{ length: number; }" 的其他子类型实例化 "T"。
//     return {
//       length: minimum
//     }
//   }
// }

// 4). 编写良好泛型函数的指南

// 1. 下推类型参数
// function fn1<Type>(arr: Type[]) {
//   return arr[0]
// }

// function fn2<Type extends any[]>(arr: Type) {
//   return arr[0];
// }


// // a: number
// const a = fn1([1, 2, 3]);
// // b: any
// const b = fn2([1, 2, 3]);
/**
 * TS 必须使用 约束类型来解析 arr[0] 表达式, 而不是 等待 在调用期间解析元素.
 * 
 * 规则: 如果可能, 使用类型参数本身, 而不是约束它.
 */

// 2. 使用更少的类型参数

// function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
//   return arr.filter(func);
// }

// function filter2<Type, Func extends (arg: Type) => boolean>(
//   arr: Type[],
//   func: Func
// ): Type[] {
//   return arr.filter(func);
// }


// 3. 类型参数应该出现两次

// 5). 回调中的可选参数
/**
 * 常见的编写错误: 
 *   编写 index? 作为可选参数时, 会出现函数 可能该参数未定义 的 错误
 *  
 *   ts中具有较少参数(相同类型)的函数总是可以替代具有更多参数的函数. 
 */
// function myForEach(
//   arr: any[], 
//   callback: (arg: any, index?: number) => void
// ) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i);
//   }
// }


// myForEach([1, 2, 3], (a, i) => {
//   console.log(i.toFixed());
// });

// 6). 函数重载

// function makeDate(timestamp: number): Date;
// // function makeDate(timestamp: number, d: number): Date;
// function makeDate(m: number, d: number, y: number): Date;
// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
//   if (d !== undefined && y !== undefined) {
//     return new Date(y, mOrTimestamp, d);
//   } else {
//     return new Date(mOrTimestamp);
//   }
// }
// const d1 = makeDate(12345678);
// const d2 = makeDate(5, 5, 5);

// // Error: 没有需要 2 参数的重载，但存在需要 1 或 3 参数的重载。ts(2575)
// const d3 = makeDate(1, 3);


// --------------------------
// function fn(x: string): void;
// function fn() {
// }
// // Expected to be able to call with zero arguments
// fn();

// ----------------------------------

// function fn(x: boolean): void;
// // Argument type isn't right
// function fn(x: string): void;
// // This overload signature is not compatible with its implementation signature.
// function fn(x: boolean) {}


// -------------------------------------
// function fn(x: string): string;
// // Return type isn't right
// function fn(x: number): boolean;
// // This overload signature is not compatible with its implementation signature.
// function fn(x: string | number) {
//   return 'oops';
// }

// 编写好的重载
// function len(s: string): number;
// function len(arr: any[]): number;
// function len(x: any) {
//   return x.length;
// }

// len('');
// len([0]);

// 没有与此调用匹配的重载。
//   第 1 个重载(共 2 个)，“(s: string): number”，出现以下错误。
//     类型“number[] | "hello"”的参数不能赋给类型“string”的参数。
//       不能将类型“number[]”分配给类型“string”。
//   第 2 个重载(共 2 个)，“(arr: any[]): number”，出现以下错误。
//     类型“number[] | "hello"”的参数不能赋给类型“any[]”的参数。
//       不能将类型“string”分配给类型“any[]”。ts(2769)
// len(Math.random() > 0.5 ? 'hello' : [0]);

// 尽可能使用联合类型, 而不是重载
// function len(x: any[] | string) {
//   return x.length;
// }


// 剩余实参
// 注意: ts 并不假定数组是不可变的, 这可能会导致下面的错误.
// 解决方案: as const
// const args = [8, 5];
// // error: 扩张参数必须具有元组类型或传递给 rest 参数
// const angle = Math.atan2(...args);

// 函数的可赋值性

// 返回类型 void
// 返回 void 类型, 并不会强制函数不返回某些内容.
// 另一种说法, 具有 void 返回类型的上下文函数类型, 当实现时, 可以返回任何其他值, 会被忽略.

type voidFn = (...args: any[]) => void;

const f1: voidFn = () => {
  return '1';
}

const f2: voidFn = () => {
  return () => { }
}

const f3: voidFn = () => {
  return true;
};

// 函数的返回值被赋予给另一个变量, 会保留 void 的类型
const v1 = f1();
const v2 = f2();
const v3 = f3();

// 当字面量函数类型定义具有返回 void 返回类型, 不能返回任何内容.
function f4(): void {
  // @ts-expect-error
  return true;
}
 
const f5 = function (): void {
  // @ts-expect-error
  return true;
};