// 将字符串字面量类型按照指定字符, 分割为元组. 无法分割则返回字符串字面量

// 根据 infer 的左右来分割, 左边放到数组中, 最终添加到 结果.
type SplitString<
  T extends string,
  F extends string,
  RES extends any[] = []> =
  T extends `${infer S}${F}${infer L}`
  ? SplitString<L, F, [...RES, S]>
  : T extends '' ? RES : [...RES, T];


type A1 = SplitString<'handle-open-flag', '-'>;
type A2 = SplitString<'open-flag', '-'>;
type A3 = SplitString<'handle.open-flag', '.'>;
type A4 = SplitString<'handle-open.flag', '-'>;
type A5 = SplitString<'handle.open.flag.', '.'>;
type A6 = SplitString<'handle.open.flag.22', '.'>;
type A7 = SplitString<'handle.open.flag.22', '-'>;