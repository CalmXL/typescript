// // 鸭子类型检测 结构化类型检测
// // 子类型可以赋予给父类型, 从结构角度出发, 
// // ts 比较的不是类型的名称,而是这个结构上的属性和方法

// // 1. 基础类型的兼容性问题
// // 将一个值赋予给另一个值可以产生兼容性
// let obj: {
//   toString(): string;
// };

// let str: string = 'xl';
// obj = str;
// // 从安全的角度出发,你要的属性我都满足, 只能访问已经存在的属性,不存在无法访问
// // obj.split('');


// // 2. 接口的兼容性
// interface IPerson {
//   name: string;
//   age: number;
// }

// interface IAnimal {
//   name: string;
//   age: number;
//   address: string;
// }

// let person!: IPerson;
// let animal!: IAnimal;

// person = animal; // 在后台返回数据中我们可以预先定义好接口类型, 多的属性也可以赋值给这个类型


// // 3. 函数的兼容性

// let s1 = (a: string, b: string): string | number => a + b;
// let s2 = (a: string) => a; // ts 是基于位置推导的
// let s3 = () => 100

// // 要赋予的参数个数只能少不能多, 针对返回值而言赋予的函数的返回值只要是被赋值的子类型即可
// s1 = s2;
// s1('1', '2');
// s1 = s3;


// // [1, 2].forEach((item, index, arr) => { });

// // function forEach<T>(
// //   arr: T[],
// //   callback: (item: T, index: number, arr: T[]
// // ) => void) {

// //   for (let i = 0; i < arr.length; i ++) {
// //     callback(arr[i], i, arr);
// //   }
// // }

// // forEach([1, '2', false], (item) => {
// //   console.log(item);
// // })


// // 函数的逆变与协变
// // 参数是逆变, 返回值是协变

// class Parent {
//   house () {}
// }

// class Child extends Parent {
//   car () {}
// }

// class GrandSon extends Child {
//  money () {}
// }

// function fn (callback: (instance: Child) => Child) {
//   let child = new Child();
//   let ins = callback(child);
  
//   return ins;
// }

// // 为什么赋予的函数, 可以是 Parent 不可以是 GrandSon, 内部调用的时候传递的是 Child, 在拿到的时候不能访问实例不存在的属性
// fn((instance: Parent) => {
//   return new Child()
// })

// let t1: (instance: Child) => void = (instance: Parent) => '' // 函数的参数是逆变的
// t1(new Child());

// let t2: (instance: Child) => Child = (instance: Parent) => new GrandSon(); // 函数的返回值是协变

// // 传递的函数 (传父(逆变)返子(协变))

// // 对于函数的兼容性而言, 参数的个数要少, 传递的可以是父类, 返回值可以返回儿子
// // strictFunctionTypes 开启后就变成了双向协变(参数和返回值)


// interface TT<T> {

// }

// let o1: TT<string>;
// let o2!: TT<number>;

// o1 ='abc';
// o2 = 213;
// o1 = o2;

// enum E1 {

// }

// enum E2 {

// }

// // 枚举是不具备兼容性的
// // let e1!: E1;
// // let e2!: E2;

// // e1 = e2;

// // 类的兼容性
// class A {
//   public name!: string;
//   protected score!: number;
// }

// class B {
//   public name!: string;
//   protected score!: number;
//   public age!: number;
// }

// // let b: B = new A();
// let a: A = new B(); // 比较的是属性， 不符合就不兼容， 如果类中存在私有属性，或者受保护的属性

// // ts 比较类型结构的时候，比较的是属性和方法
// // 如果属性和方法都满足则兼容，有些比较特殊

// // 基础类型和对象的兼容，接口的兼容，泛型的兼容，枚举的兼容，类的兼容

// // 在其他语言中，存在标称类型 (根据名称来区分类型), 通过交叉类型实现标称类型
// type Nominal<T, Tag extends string> = T & { _tag: Tag }
// type BTC = Nominal<number, 'btc'>;
// type USDT = Nominal<number, 'usdt'>;
// let btc = 1000 as BTC;
// let usdt = 2000 as USDT;

// function getVal (val: BTC) {
//   return val; 
// }
// getVal(btc)
// // getVal(usdt)

// export { };
