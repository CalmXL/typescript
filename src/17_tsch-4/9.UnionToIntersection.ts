// // 将联合类型转换为交叉类型

// type UnionToIntersection<T> = any;

// type A = UnionToIntersection<{ a: string } | { b: string } | { c: string }>;
// // { a: string } & { b: string } & { c: string }

// export { };

// // 知不知道逆变与协变, 逆变参数可以传父亲

// type x1 = (val: { a: string }) => any;
// type x2 = (val: { b: string }) => any;
// type x3 = (val: { c: string }) => any;

// let a1: x1;
// let a2: x2;
// let a3: x3;

// let x: (val: { a: string }) => any = a3!;
