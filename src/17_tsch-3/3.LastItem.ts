// 访问元组的最后一个元素

type LastItem<T extends any[]> = T extends [...infer rest, infer L] ? L : never;

type A = LastItem<[string, number, boolean]>;
type B = LastItem<['B', 'F', 'E']>;

export { };