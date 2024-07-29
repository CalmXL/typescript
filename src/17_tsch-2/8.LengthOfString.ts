// 计算字符串字面量类型的长度

// 通过数组取长度
type LenOfStr<T extends string, A extends any[] = []> =
  T extends `${infer L}${infer R}` ?
  LenOfStr<R, [...A, L]> :
  A['length'];
;


type A = LenOfStr<'BOX.DED'>;
type B = LenOfStr<''>;

export { };