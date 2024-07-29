// 元组转换成字符串

type TupleToString<T extends any[], F extends string = ''> =
  T extends [infer L extends string | number | bigint | boolean | null | undefined, ...infer R]
  ? TupleToString<R, `${F}${L}`>
  : F;

type A = TupleToString<['a', 'b', 'c']>;
type B = TupleToString<['a']>;
type C = TupleToString<[]>;
type D = TupleToString<[1, 2, 'b', 'c']>

export { };