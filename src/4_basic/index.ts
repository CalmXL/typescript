// 函数类型

// 1. 函数表达式 
// 2. 函数声明 function () {}

// 函数有入参 和 返回值 (针对这个部分)

// function sum(a: string, b:string):string {
//   return a + b;
// }

// let sum = (a: string, b : string):string => {
//   return a + b;
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