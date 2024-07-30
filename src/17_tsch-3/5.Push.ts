// Push 往数组中放入1个或多个元素

type Push<T extends any[], K> = T extends [...infer Tuple] ? [...Tuple, K] : [K];

type A = Push<['A', 'B', 'C'], 'D'>;
type B = Push<[], 'X'>;
type C = Push<['A', 'B', 'C'], 'E'>;


export { };
