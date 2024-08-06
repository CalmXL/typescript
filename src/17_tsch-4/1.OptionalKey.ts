// 获取对象类型中的可选属性的联合类型

// 如何判断这个对象的属性是不是可选的
// 可以考虑把对象的某个属性删除 看能不能赋予给自己, 如果可以说明是可选的
export type OptionalKeys<T extends object, K = keyof T> =
  K extends keyof T ? Omit<T, K> extends T ? K : never : any;
;

type a1 = OptionalKeys<{
  foo: number | undefined;
  bar?: string;
  flag: boolean;
}>;

type a2 = OptionalKeys<{ foo: number; bar?: string }>;
type a3 = OptionalKeys<{ foo?: number; flag?: boolean }>;
type a4 = OptionalKeys<{ foo: number; flag: boolean }>;
type a5 = OptionalKeys<{}>;


export { }