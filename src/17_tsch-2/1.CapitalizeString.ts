// 1. 首字母大写

// type CapitalizeString<T> =
//   T extends string
//   ? `${Capitalize<T & string>}`
//   : T;


// 默认情况下, 字符串的 infer 只匹配一个字节
// 针对字符串的 infer 默认 infer 第一个指代的是第一个字节, 后面的代表所有的
// 如果有分隔符, 指代的是分割符之前的
type CapitalizeString<T> =
  T extends `${infer L}${infer R}`
  ?`${Capitalize<L>}${R}`
  : T;

type a1 = CapitalizeString<"handler">; // => Handler
type a2 = CapitalizeString<"parent">; // => Parent
type a3 = CapitalizeString<233>; // => 233

export { };