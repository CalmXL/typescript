// 得到元组类型中的第一个元素

type FirstItem<T extends any[]> = T extends [infer F, ...infer Rest] ? F : never;

type A = FirstItem<[string, number, boolean]>;
type B = FirstItem<['B', 'F', 'E']>;

export { };