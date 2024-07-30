
// 替换单个
// type Replace<T extends string, O extends string, S extends string> =
//   T extends ''
//   ? T
//   : O extends '' ? T : T extends `${infer L}${O}${infer R}`
//   ?
//   `${L}${S}${R}`
//   : T
//   ;

// *******************************************

type Replace<
  T extends string,
  C extends string,
  RC extends string,
  F extends string = ''
> = 
  C extends '' 
    ? T extends '' ? RC : `${RC}${T}`
    : T extends `${infer L}${C}${infer R}`
      ? Replace<R, C, RC, `${F}${L}${RC}`>
      : `${F}${T}`
;

// 构建一个查找规则, 找到后将 左边和右边留起来


type a1 = Replace<'hahaha11', 'ha', 'he'> // ok
type a2 = Replace<'xl', 'xl', 'xulei'> // ok
type a3 = Replace<'a', '', 'xulei'> // ok
type a4 = Replace<'', '', 'xulei'> // ok
type a5 = Replace<'', 'xx', 'xulei'>