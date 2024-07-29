// 按照提供的 数字 重复字符

/**
 * T: string
 * C: 循环的次数
 * A: 使用数组的length, 记录循环的次数, 元组可以使用 元素撑开
 * F: 用于拼接结果
 */

type RepeatString<
  T extends string,
  C extends number,
  A extends any[] = [],
  F extends string = ''
> =
  C extends A['length']
  ? F
  : RepeatString<T, C, [...A, T], `${F}${T}`>;


// 元组的长度是固定的 length 会是 字面量类型
type L = ['a', '', null]['length'];
type R = 1 extends ['1']['length'] ? true : false;

type A = RepeatString<'a', 3>; // 'aaa'
type B = RepeatString<'ab', 10>; // ''

export { };