// 内置类型
// Partial  Required  Readonly 修饰类型的
// Pick Omit 处理数据结构
// Exclude Extract 处理集合类型
// Paramters ReturnValue infer
// 字符串类型 模板字符串


// 1. 部分属性可选
interface Person {
  name: string;
  age: number;
  address: string;
}

// 写类型的时候 多种写法, 都可以实现相同的功能
type PartialPropsOptional<T extends object, K extends keyof T> =
  Partial<Pick<T, K>> & Omit<T, K>;

type Computed<T> = {
  [K in keyof T]: T[K]
}

type c = Computed<PartialPropsOptional<Person, 'age' | 'address'>>

type p1 = PartialPropsOptional<Person, 'age' | 'address'>

let p: p1 = {
  name: 'xl'
}

// 选择
type pick = Pick<Person, 'age' | 'name'>
// 排除
type omit = Omit<Person, 'address'>
// 可选
type partial = Partial<Person>

type MyPick<T extends object, K extends keyof T> = {
  [P in K]: T[K]
}

type MyOmit<T, K extends keyof T> = {
  // 遍历类型 T 得到的键名为P, 并且 P 拓展自 K, 则 排除,否则 保留
  [P in keyof T as P extends K ? never : P]: T[P]
}

type MyPartial<T extends object> = {
  [K in keyof T]?: T[K]
} 

type mp = MyPick<Person, 'age' | 'name'>
type mo = MyOmit<Person, 'address'>
type myPartial = MyPartial<Person>


export { };