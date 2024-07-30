// flat 拍平数组

type Flat<
  T extends any[],
> =
  T extends [infer L, ...infer R]
  // 循环拍平 左和右 
  ? [...(L extends any[] ? Flat<L> : [L]), ...Flat<R>]
  : T;


/**
 * [1, 2] -> 1 -> [1]
 *        -> 2 -> [2]
 */
type A = Flat<[[1, 2], [3, 4]]>
type B = Flat<[[1, 2], [3, 4, [5], 6, [7, 8]], 9]>
type C = Flat<[]>
type D = Flat<[[1, 2, [3, 4]], 'a', ['b', ['c'], ['d']]]>;

export { };