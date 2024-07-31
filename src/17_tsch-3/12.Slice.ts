
type Arr = [any, never, 1, '2', true, boolean];

// 需要通过元组记录 递归次数
type Slice<
  T extends any[],
  Start extends number,
  End extends number = T['length'],
  SA extends any[] = [], // 起始数组
  SE extends any[] = [], // 结束数组,
  A extends any[] = [], // 全部数组
> =
  T extends [infer L, ...infer R]
  ? SA['length'] extends Start
  ? A['length'] extends End
  ? SE
  : Slice<R, Start, End, SA, [...SE, L], [...A, L]>
  : Slice<R, Start, End, [...SA, L], [...SE], [...A, L]>
  : SE;
;


type A1 = Slice<Arr, 0, 2>; // => [any, never]
type A2 = Slice<Arr, 1, 3>; // => [never, 1]
type A3 = Slice<Arr, 1, 2>; // => [never]

type A4 = Slice<Arr, 2>; // => [1, '2', true, boolean]
type A5 = Slice<[any], 0, 2>; // => [any]
type A6 = Slice<[], 0>; // => []


export { };