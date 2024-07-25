// 2. 根据值类型 (挑选/忽略) 对象的类型属性

interface Person {
  name: string;
  age: number;
  address: string;
}


// type ExtractKeysByValue<T extends object, K> = {
//   [P in keyof T as T[P] extends K ? never : P]: T[P] 
// }

// 如何通过值拿到对应的key, 先找到所有的值是 string
// 将类型相同的进行映射 { name: "name", age: "never", address: 'address'}

// 如何判端两个类型是否相同 (类型层级)

type PickKeysByValue<T extends object, U> = {
  [K in keyof T]: T[K] extends U ? K : never
}

type t = PickKeysByValue<Person, string>;

type t2 = t[keyof t]

type ExtractKeysByValue<T extends object, U> = PickKeysByValue<T, U>[keyof PickKeysByValue<T, U>]

type p2 = ExtractKeysByValue<Person, string>;

export { };