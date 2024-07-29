// 模式匹配, 推断函数类型中参数的最后一个参数类型

function sum(
  a: string,
  b: string,
  c: number
) {

}

// 约束参数就是一个函数
// type LastParameter<T extends (...args: any[]) => any> =
//   T extends (...args: infer P) => any
//   ? P extends [...any, infer Last]
//     ? Last
//     : never
//   : never;

type LastParameter<T extends (...args: any[]) => any> =
  Parameters<T> extends [...infer X, infer Last]
  ? Last
  : never;


type r1 = LastParameter<typeof sum>;