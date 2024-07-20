
// class Animal {
//   constructor(public name: string, public age: number) { }
// }

// class Person {
//   constructor(public name: string, public age: number) { }
// }

// type IClazz = new(name: string, age: number) => any
// interface IClazz<T> {
//   new(name: string, age: number): T;
// }

// function createInstance<T>(target: IClazz<T>, name: string, age: number) {
//   return new target(name, age);
// }

// ts 中使用的时候确定类型，可以通过泛型 (传递的类型) T K U M N O P
// const animal = createInstance<Person>(Animal, 'cat', 10);

// 根据提供的数据生成对应长度的数组
// function createArray<U>(len: number, val: U) {
//   let result = [];

//   for (let i = 0; i < len; i ++) {
//     result.push(val)
//   }

//   return result;
// }

// let r = createArray(3, 1);


// 两个泛型

// function swap<T, K>(tuple: [T, K]): [K, T] {
//   return [tuple[1], tuple[0]];
// }

// type ISwap = <T, K>(tuple: [T, K]) => [K, T]

// interface ISwap {
//   <T, K>(tuple: [T, K]): [K, T]
// }

// let swap: ISwap = (tuple) => {
//   return [tuple[1], tuple[0]]
// }

// let r2 = swap(['abc', 123]); // => 123, abc


// const forEach = <T>(arr: T[], cb: (item: any, index: number) => void) => {
//   for (let i = 0; i < arr.length; i ++) {
//     cb(arr[i], i);
//   }
// }


// 泛型使用的时候传递类型，可以直接推导，但是内部调用的时候没有确定类型
// type ICb<T> = (item: T, index: number) => void
// type IForEach = <T>(arr: T[], cb: ICb<T>) => void
// const forEach: IForEach = (arr, cb) => {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i], i);
//   }
// }

// forEach([1, 2, 3, 'a', 'b', 'c'], function (item, index) {
//   console.log(item, index);
// })
// 写在前面，就表示使用类型的时候传参，写到函数的前面意味着调用函数的时候传递参数

// _______________________________________________________________

// 泛型是有默认值的
// 在使用一些联合类型的时候， 会使用泛型

type Union<T = boolean> = T | number | string;

let union: Union = true;

// 泛型约束 要求传递的参数必须符合要求  
// A extends B 要求， A 是 B 的 子类型或者同类型

function handle<T extends string | number>(val: T): T {
  return val;
}

let r = handle('abc');


interface IWithLen {
  length: number
}


function handle2<T extends IWithLen>(val: T) {
  return val.length;
}
handle2({
  a: 1,
  length: 2
})

/**
 * 什么叫子 什么叫父
 * 对于对象而言，子的类型结构可以比父亲多的
 * 子 继承 父
 */

// function getVal<T> (obj: T, key: keyof T) {
// }

function getVal<T, K extends keyof T>(obj: T, key: K) {
}

getVal({ name: 'xulei', age: 30 }, "age");


// 通过 泛型 坑位 来占位置

interface ILoginResponse<T> {
  code: number;
  massage?: string;
  data: T;
}

interface ILoginData {
  token: string;
  roles: number[];
}

function toLogin(): ILoginResponse<ILoginData> {

  return {
    code: 200,
    massage: '11',
    data: {
      token: 'token',
      roles: [1, 2, 3]
    },
  }
}

// 获取最大值
class MyArray<T> {
  private arr: T[] = [];

  set(val: T) {
    this.arr.push(val);
  }

  getMax(): T {
    let arr = this.arr;
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
      let cur = arr[i];

      if (cur > max) {
        max = cur
      }

    }
    return max;
  }
}

let arr = new MyArray<number>();

arr.set(1);
arr.set(100);
arr.set(300);

const res = arr.getMax()
console.log(res);

export { };