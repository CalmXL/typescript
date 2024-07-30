
type Replace<T extends string, O extends string, S extends string> =
  T extends ''
  ? T
  : O extends '' ? T : T extends `${infer L}${O}${infer R}`
  ?
  `${L}${S}${R}`
  : T
  ;

// 构建一个查找规则, 找到后将 左边和右边留起来


type a1 = Replace<'hahaha', 'ha', 'he'>
type a2 = Replace<'xl', 'xl', 'xulei'>
type a3 = Replace<'a', '', 'xulei'>
type a4 = Replace<'', '', 'xulei'>
type a5 = Replace<'', 'xx', 'xulei'>