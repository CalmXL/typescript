// 内置类型值之条件类型

// 正产判断类型 可以通过 A extends B A 是 B 的子类型

// 1. A 类型是通过泛型传入的
// 2. A 类型如果是联合类型会进行分发
// 3. 泛型参数 A 必须是完全裸露的，才具备分发能力 
// 4. 裸类型就是只有自己, 自己没和别人发生关系

interface Bird {
  name: '鸟'
}

interface Fish {
  name: '鱼'
}

interface Sky {
  name: '天空'
}

interface Water {
  name: '水'
}

type Conditional = Fish | Bird extends Fish ? Water : Sky;// 此情况并没有产生分发

type Conditional2<T> = T extends Fish ? Water : Sky;

/**
 * Bird -> Sky
 * Fish -> Water
 * 
 * 将联合类型中的每一项单独比较
 */
type r = Conditional2<Fish | Bird>

// 默认情况下，有些时候我们需要关闭这种分发能力，会造成判断不准确
type Conditional3<T, U> = T extends U ? true : false;
type R2 = Conditional3<1 | 2, 1>;

// 分发就是挨个比较，不想分发就是将结果运算后再比较

// 禁用分发机制
type NoDistribute<T> = T & {}; // 只是为了让这个 T 产生一个新类型而已
type Conditional4<T, U> = NoDistribute<T> extends U ? true : false;
type R3 = Conditional4<1 | 2, 1>;


type Conditional5<T, U> = [T] extends U ? true : false;
type R4 = Conditional5<1 | 2, 1>;

// 条件判断还有些注意事项
type IsNever<T> = T extends never ? true : false;

// never 直接比较的时候无法返回正确的结果
type R5 = IsNever<never>; // => never 

// 我们在进行类型父子关系的比较时，默认情况下都应该关闭分发
// 通过条件类型: Ts 自己实现了一些常见的内置类型

// 内置1 Extract 抽离
// type R6 = Extract<1 | 2 | 3, 1 | 2 | 4>; // 求交集,第一个和第二个的公共部分
type MyExtract<T, U> = T extends U ? T : never;
type R6 = MyExtract<1 | 2 | 3, 1 | 2 | 4>; // 求交集,第一个和第二个的公共部分

// 排除
type MyExclude<T, U> = T extends U ? never : T;
// type R7 = Exclude<1 | 2 | 3 | 4 | 5, 2 | 4>;
type R7 = MyExclude<1 | 2 | 3 | 4 | 5, 2 | 4>;


// NonNullable
type MyNonNullable<T> = T & {};
// type R8 = NonNullable<1 | 2 | null | undefined>
type R8 = MyNonNullable<1 | 2 | null | undefined>

type x1 = null & {}; // => never 
type x2 = undefined & {}; // => never

// 可以求联合类型的交集和差集 Extract, Exclude 可以求对象属性的交集和差集

// infer 类型推断
// infer 可以在条件类型中提取类型的某一个部分,
// 在使用的时候想获取什么类类型就将它写在什么地方,加一个变量可以自动推导
// 类型推导都是基于位置的

// 获取函数的返回值类型
function getObj(name: string, age: number) {
  return {
    name,
    age
  }
}

// 使用 infer 需要先创建一个条件才行
type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never;
type R9 = ReturnType<typeof getObj>

type MyParameters<T extends (...args: any[]) => any> =
  T extends (...args: infer P) => any ? P : never
// type R10 = Parameters<typeof getObj>
type R10 = MyParameters<typeof getObj>


class A {
  constructor (name: string, age: number) {
  }
}

type MyConstructParameters<T extends new (...args: any[]) => any> = T extends new (...args: infer R) => any ? R : never;
// type R11 = ConstructorParameters<typeof A>;
type R11 = MyConstructParameters<typeof A>;

type MyInstanceType<T extends new (...args: any[]) => any> = T extends new (...args: any[]) => infer R ? R : never;
// type R12 = InstanceType<typeof A>;
type R12 = MyInstanceType<typeof A>;

  
function createInstance<T extends new (...args: any[]) => any> (
  target: T, 
  ...args: ConstructorParameters<T>
): InstanceType<T> {
  return new target(...args);
}

// class Person {
//   constructor(public name: string, public age: number) {}
// }

// let r = createInstance(Person, 'xulei', 20);

// infer 中实现了很多的内置类型 ReturnType, Parameters, ConstructParameters, InstanceType


// swap
type Swap<T> = T extends [infer A1, infer A2] ? [A2, A1] : never; 
type R13 = Swap<['xl', 39]>; // 30, 'jw'

// 头尾交换
type SwapHeadTail<T> = T extends [infer H, ...infer N, infer T] ? [T, ...N, H] : never;
type R14 = SwapHeadTail<[1, 2, 3, 4, 5, 6 ,7]>; 


// promise 如果返回的是一个 promise, 会不停的解析这个 promise 
// 通过 infer 递归推导
type PromiseReturnValue<T> = T extends Promise<infer P> ? PromiseReturnValue<P> : T;  
type R15 = PromiseReturnValue<Promise<Promise<Promise<100>>>>

// 将元祖转换成联合类型 [number, boolean, string] -> number | boolean | string
// type TupleToArray = [number, boolean, string][number];
type ElementToUnion<T> = T extends Array<infer E> ? E : never;
type TupleToArray = ElementToUnion<[number, boolean, string]>;


// 重构类型的结构 T & K

// Partial Require Readonly 属性修饰符
// Pick Omit Record  

interface IAddress {
  n: 100,
  x: 200,
  y: 300
}

interface Person {
  name: string;
  age: number;
  address: IAddress;
}

type MyPartial<T> = {
  // 循环属性，增加可选属性
  [K in keyof T]?: T[K];
}

type DeepPartial<T> = {
  // 循环属性，增加可选属性
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
}

// let p:  <Person> = {
//   name: 'xulei'
// }
// let p: MyPartial<Person> = {
//     name: 'xulei',
//     address: {}
//   }
let p2: DeepPartial<Person> = {
    name: 'xulei',
    address: {}
  }

// Required 只有第一层
type Required<T> = {
  [K in keyof T]-?: T[K]
}

let p3: Required<DeepPartial<Person>> = {
  name: 'xl',
  age: 30,
  address: {}
}

type Mutate<T> = {
  -readonly [K in keyof T]: T[K]
}

let p4: Mutate<Readonly<Required<DeepPartial<Person>>>> = {
  name: 'xl',
  age: 29,
  address: {}
}

p4.name = 'xh'; // => 无法为“name”赋值，因为它是只读属性。

// Pick Omit 对象的重构
type MyPick <T, K extends keyof T> = {
  [Key in K]: T[Key];
}

// type PickPerson = Pick<Person, "name" | "age">;
type PickPerson = MyPick<Person, "name" | "age">;
let person4: PickPerson; 


// 在很多属性中挑选需要的， 在很多属性中排除不需要的
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
// type person5 = Omit<Person, "address">;
type person5 = MyOmit<Person, "address">;

// 映射类型 Pick + Omit 配合 Extract 和 Exclude 可以实现各种各样的类型

// 针对这种情况应该将 B 有的属性，在 A 里面移除掉
function mixin<T extends object, K extends object >(a: T, b: K): Omit<T, keyof K> & K {
  return {
    ...a,
    ...b
  }
}

let x = mixin({
  name: 'xl',
  age: 20,
  c: 3
}, {
  name: 123,
  age: 28,
  b: 2
})

type nameType = (typeof x)['name'];

// keyof 取Key
// typeof 取类型的
// 索引查询 []
// in 循环的
// extends 条件


// 只想要 key -> value 的格式 可以采用 Record 的格式
// 一些映射类型可以采用 Record 会合理一些
let p6 :Record<string, any> = [];

function map<T extends keyof any, K, R> (
  obj: Record<T, K>, 
  callback: (value: K, key: T) => R
  ) {
  let result = {} as Record<T, R>;
  for (let key in obj) {
    result[key] = callback(obj[key], key)
  }

  return result
}

let mr = map({
  name: 'xl',
  age: 20
}, (value, index) => {
  return 'abc';
})

export { }