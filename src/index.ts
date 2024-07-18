// ts 学习的类型
// ts 中的类型分类: 
//  内置类型(DOM、Promise、原始方法)
//  基础类型
//  高级类型
//  自定义类型

// ts : 后面的都是类型 = 后面的都是值
// 1. ts 一切从安全的角度来触发，看能不能赋值 就看安全不安全
// 2. ts 在编写的时候是没有代码执行的
// 3. ts 还有自动的类型推导


// let name: string = "xulei";
// let age: number = 28;
// let handsome: boolean = true;

// let s1: string = 'abc';
// // let s2: string = new String();
// let s3: String = 'abc';

// 大写的类型都是包装类

let arr: number[] = [1, 2];
let arr2: string[] = ['1', '2'];
let arr3: (number | string)[] = [1, '2']
let arr4: Array<string | number> = ['1', '2', 3]

// 元组 规定长度和存储的类型
let tuple: [string, number, boolean] = ['xulei', 30, true];

// let t = tuple[0];
// let age = tuple[1];
// let b = tuple[2];

// 元组是只读的
tuple.push('xuhong');

// tuple[3];

// 模块之间的隔离
export {};