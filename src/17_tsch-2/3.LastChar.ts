// 获取字符串字面量中的最后一个字符

// 不停的取右侧的部分, 取出第一个, 每次取之前保存上一次的,
// 最终不满足条件返回上一次的 L
type LastChar<T, F = never> = 
  T extends `${infer L}${infer R}` ? LastChar<R, L> : F;


type A = LastChar<'BFE'>; // => E
type B = LastChar<'dev'>; // => v
type C = LastChar<''>; // never

export {};