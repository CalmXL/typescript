// 鸭子类型检测 结构化类型检测
// 子类型可以赋予给父类型, 从结构角度出发, 
// ts 比较的不是类型的名称,而是这个结构上的属性和方法

// 1. 基础类型的兼容性问题
// 将一个值赋予给另一个值可以产生兼容性
let obj: {
  toString(): string;
};

let str: string = 'xl';
obj = str;
// 从安全的角度出发,你要的属性我都满足, 只能访问已经存在的属性,不存在无法访问
// obj.split('');


// 2. 接口的兼容性
interface IPerson {
  name: string;
  age: number;
}

interface IAnimal {
  name: string;
  age: number;
  address: string;
}

let person!: IPerson;
let animal!: IAnimal;

person = animal; // 在后台返回数据中我们可以预先定义好接口类型, 多的属性也可以赋值给这个类型


// 3. 函数的兼容性

let s1 = (a: string, b: string): string | number => a + b;
let s2 = (a: string) => a; // ts 是基于位置推导的
let s3 = () => 100

// 要赋予的参数个数只能少不能多, 针对返回值而言赋予的函数的返回值只要是被赋值的子类型即可
s1 = s2;
s1('1', '2');
s1 = s3;


// [1, 2].forEach((item, index, arr) => { });

// function forEach<T>(
//   arr: T[],
//   callback: (item: T, index: number, arr: T[]
// ) => void) {

//   for (let i = 0; i < arr.length; i ++) {
//     callback(arr[i], i, arr);
//   }
// }

// forEach([1, '2', false], (item) => {
//   console.log(item);
// })


// 函数的逆变与协变
// 参数是逆变, 返回值是协变

class Parent {
  house () {}
}

class Child extends Parent {
  car () {}
}

class GrandSon extends Child {
 money () {}
}

function fn (callback: (instance: Child) => Child) {
  let child = new Child();
  let ins = callback(child);
  
  return ins;
}

// 为什么赋予的函数, 可以是 Parent 不可以是 GrandSon, 内部调用的时候传递的是 Child, 在拿到的时候不能访问实例不存在的属性
fn((instance: Parent) => {
  return new Child()
})

let t1: (instance: Child) => void = (instance: Parent) => '' // 函数的参数是逆变的
t1(new Child());

let t2: (instance: Child) => Child = (instance: Parent) => new GrandSon(); // 函数的返回值是协变

// 传递的函数 (传父(逆变)返子(协变))

// 对于函数的兼容性而言, 参数的个数要少, 传递的可以是父类, 返回值可以返回儿子

export { };
