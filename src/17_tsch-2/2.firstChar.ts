// 获取字符串字面量中的第一个字符

type FirstChar<T> = T extends `${infer F}${infer A}` ? F : never;

type A = FirstChar<'BFE'>;
type B = FirstChar<'dev'>;
type C = FirstChar<''>;
type D = FirstChar<'A'>;

export {};