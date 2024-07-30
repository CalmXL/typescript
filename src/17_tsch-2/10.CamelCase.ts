// 横杠命名转化为驼峰命名
type FirstCharUpper<T extends string> =
  T extends `${infer L}${infer R}` ? `${Uppercase<L>}${R}` : never;

export type CamelCase<
  T extends string,
  Res extends string = ''
> =
  T extends `${infer L}-${infer R}`
  ? CamelCase<R, `${Res}${L extends `${infer L}${infer R}`
    ? `${Uppercase<L>}${R}`
    : never}`>
  : `${Res}${FirstCharUpper<T>}`;


type CamelCase2<
  T extends string,
  Res extends string = ''
> =
  T extends `${infer L}-${infer R}`
  ? CamelCase<R, `${Res}${Capitalize<L>}`>
  : `${Res}${Capitalize<T>}`;

type A1 = CamelCase2<'handle-open-flag'>; // => HandleOpenFlag
type A2 = CamelCase2<'open-flag'>; // => OpenFlag

// Capitalize 首字母大写
type r = Capitalize<'ha'>

export { };