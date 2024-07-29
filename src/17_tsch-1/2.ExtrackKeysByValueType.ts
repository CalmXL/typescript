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
// name | never | address
// Pick 属性即可

// 如何判端两个类型是否相同 (类型层级, 结构)
type isEqual<T, K, Success, Fail> = [T] extends [K]
  ? [K] extends [T] // 从类型的角度出发, 两个类型完全一致, 互相可以 extends 
  ? Success
  : Fail
  : Fail;

// type ExtractKeys<T extends object, U, O> = {
//   [K in keyof T]: isEqual<
//     T[K], 
//     U, 
//     K, 
//     never
//   >;
// }[keyof T];

type ExtractKeys<T extends object, U, O = false> = {
  [K in keyof T]: isEqual<
    T[K],
    U,
    isEqual<O, true, never, K>,
    isEqual<O, true, K, never>
  >;
}[keyof T];

type PickKeysByValue<T extends object, U> = Pick<T, ExtractKeys<T, U>>

// type OmitKeysByValue<T extends object, U> = Omit<T, ExtractKeys<T, U>>
type OmitKeysByValue<T extends object, U> = Pick<T, ExtractKeys<T, U, true>>


type p2 = PickKeysByValue<Person, string>
type p3 = OmitKeysByValue<Person, string>

// ------------------------------------------------------
// 模板字符串中有个重要的功能, 重映射

type PickKeysByValue2<T, K> = {
  // 直接将对象的属性忽略掉
  [P in keyof T as T[P] extends K ? P : never]: T[P]
}

type p4 = PickKeysByValue2<Person, string>;

// -------------------------------------------------------

// type PickKeysByValue<T extends object, U> = {
//   [K in keyof T]: T[K] extends U ? K : never
// }

// type t = PickKeysByValue<Person, string>;

// type t2 = t[keyof t]

// type ExtractKeysByValue<T extends object, U> = PickKeysByValue<T, U>[keyof PickKeysByValue<T, U>]

// type p2 = ExtractKeysByValue<Person, string>;

export { };