// 判断传入的字符串字面量类型中是否含有某个字符串

// type Include<
//   T extends string,
//   S extends string,
// > =
//   T extends ''
//   ? S extends ''
//     ? true
//     : T extends `${infer L}${infer R}`
//       ? L extends S
//         ? true
//         : Include<R, S>
//       : false
//   : false
// ;

type Include<
  T extends string,
  S extends string,
> = T extends ''
  ? S extends ''
    ? true
    : false
  : T extends `${infer L}${S}${infer R}`
    ? S extends ''
      ? false 
      : true
  : false
;

type A1 = Include<'Xu', 'X'>; // => true
type A2 = Include<'X', ''>; // => true

type A3 = Include<'', ''>; // => true
type A4 = Include<'', 'X'>


export { }
