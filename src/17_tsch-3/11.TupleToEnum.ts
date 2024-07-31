// 元素类型转换为枚举类型

import { FindIndex } from "./10.FindIndex"

type TupleToEnum<
  T extends string[],
  I extends boolean = false
> = {

    // 循环每一项, 判断需要的是索引还是值
    readonly [K in T[number]]: I extends true ? FindIndex<T, K> : K
  }

type x = ['macOS', 'Windows', 'Linux'][number];

type a1 = TupleToEnum<['macOS', 'Windows', 'Linux']>;
/**
 * {
 *   readonly macOS: 'macOS',
 *   readonly Windows: 'Windows',
 *   readonly Linux: 'Linux', // read
 * }
 */

type a2 = TupleToEnum<['macOS', 'Windows', 'Linux'], true>;
/**
 * {
 *   readonly macOS: 0,
 *   readonly Windows: 1,
 *   readonly Linux: 2, // read
 * }
 */
export { };