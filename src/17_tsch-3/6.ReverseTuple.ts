// 反转元组

type Reverse<T extends any[], R extends any[] = []> =
  T extends [infer L, ...infer rest] ? Reverse<[...rest], [L, ...R]> : R;
;

type A = Reverse<['A', 'B', 'C']>;
type B = Reverse<['A', 'B', 'N']>;

export { };