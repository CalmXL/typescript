// shift 从数组中删除第一个元素

type Shift<T extends any[]> = T extends [infer F, ...infer REST] ? [...REST] : T;

type A = Shift<[string, number, boolean]>;
type B = Shift<['B', 'F', 'E']>;
type C = Shift<['X']>;
type D = Shift<[]>;

export { };