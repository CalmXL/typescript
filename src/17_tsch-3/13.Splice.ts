// 删除并且替换部分元素

/**
 * 1. 从左边向右边遍历
 *    S
 */

type Splice<
  T extends any[],
  S extends number, // 起始索引
  E extends number, // 删除个数
  Arr extends any[] = [], // 要添加的元素
  LA extends any[] = [], // 左侧部分
  LE extends any[] = [], // 删除部分
  F extends any[] = [] // 结果
> = 
  T extends [infer L, ...infer R] 
    ? LA['length'] extends S // 开始删除
      ? LE['length'] extends E  // 删除元素完毕
        ? [... F, ...Arr, L, ... R]
        : Splice<R, S, E, Arr, [...LA], [...LE, L], [...F]>
      : Splice<R, S, E, Arr, [...LA, L], [...LE], [...F, L]>
    : F;
;

type A1 = Splice<[string, number, boolean, null, undefined, never], 0, 2>; // => [boolean, null, undefined, never]
type A2 = Splice<[string, number, boolean, null, undefined, never], 1, 3>; // => [string, undefined, never]
type A3 = Splice<[string, number, boolean, null, undefined, never], 0, 2, [1, 2, 3]>; // => [1, 2, 3, boolean, null, undefined, never]


export { };