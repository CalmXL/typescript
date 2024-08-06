// 严格比较
// 结构 与 类型 
// any 需要判断 通过 keyof 继续判断
type Equal<T, K> = [T] extends [K]
  ? [K] extends [T]
  ? keyof T extends keyof K
  ? keyof K extends keyof T
  ? true
  : false
  : false
  : false
  : false;

export type FindIndex<T extends any[], V, A extends any[] = []> =
  T extends [infer L, ...infer R]
  ? Equal<L, V> extends true ? A['length'] : FindIndex<R, V, [...A, L]>
  : never;
;
 
type a1 = [any, never, 1, '2', true];

// type R = Equal<1, any>;
type x = keyof any;

type a2 = FindIndex<a1, 1>; // 2
type a3 = FindIndex<a1, 3>; // never
type a4 = FindIndex<a1, true>; // 4
type a5 = FindIndex<a1, never>; // never

type R = keyof 1;

export { };