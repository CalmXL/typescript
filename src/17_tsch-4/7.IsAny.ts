// 可以将 unknown 赋予给 any

// type IsAny<T> = unknown extends T ?
//   [T] extends ['123']
//   ? true
//   : false
//   : false;

// // 1. unknown 可以被 赋予给 any
// type R = unknown extends any ? true : false;

// // 2. unknown 补可以被赋予给 字符串类型, any 可以
// type R2 = [unknown] extends ['123'] ? true : false;
// type R3 = [any] extends ['123'] ? true : false;


// --------------------------
type x = 1 & any;
type y = 1 & unknown;

type IsAny<T> = 0 extends 1 & T ? true : false;


type A = IsAny<string>; // false 
type B = IsAny<any>; // true
type C = IsAny<unknown>; // false 
type D = IsAny<never>; // false 

export { }; 