// 过滤

type Filter<T extends any[], K> =
  T extends [infer L, ...infer R]
  ? [L] extends [K] ? [L, ...Filter<R, K>] : [...Filter<R, K>]
  : [];
;

type A = Filter<[1, 'BFE', 2, true, 'dev'], number>; // => [1, 2]
type B = Filter<[1, 'BFE', 2, true, 'dev'], string>; // => ['BFE', 'dev']
type C = Filter<[1, 'BFE', 2, any, 'dev'], string>; // => ['BFE', any, 'dev']