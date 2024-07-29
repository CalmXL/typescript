// 4. 对象的交, 差, 并, 补 

type A = {
  name: string;
  age: number;
  address: number;
}

type B = {
  name: string;
  male: boolean;
  address: string;
}

/**交集 */
type ObjIntersection<T extends object, U extends object> =
  Pick<T, Extract<keyof T, keyof U>>

/**
 * Extract: 通过从 Type 中提取提取所有可分配给 Union 的联合成员构造的一个类型
 */

type r1 = ObjIntersection<A, B>;

/**差集 */
type ObjectDifference<T extends object, U extends Object> =
  Pick<
    T,
    Exclude<keyof T, keyof U>
  >
  

type r2 = ObjectDifference<A, B>

/**补集, 就是差集, 要求有父子关系 */
// type A = {
//   name: string;
//   address: string;
// }

// type B = {
//   name: string;
//   age: number;
//   address: string;
// }

// type ObjectCom<T extends U, U extends object> =
//   Pick<
//     T,
//     Exclude<keyof T, keyof U>
//   >
  

// type r3 = ObjectCom<B, A>;

/**重写 */
// 以后面的类型为准, 在加上以前比现在多的类型
// 用后面的类型, 覆盖掉之前的类型,保留之前多的类型
type OverWrite<T extends object, U extends object> = 
  ObjIntersection<U, T> & ObjectDifference<T, U>;

type Computed<T> = {
  [K in keyof T]: T[K]
} 

type R4 = OverWrite<A, B>
type c = Computed<R4>

export { }; 