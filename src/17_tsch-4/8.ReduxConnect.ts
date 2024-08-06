interface Action<T> {
  payload?: T;
  type: string;
}

interface Module {
  count: number;
  message: string;
  asyncMethod<T, U>(input: Promise<T>): Promise<Action<U>>;
  syncMethod<T, U>(action: Action<T>): Action<U>;
}

type Result = {
  asyncMethod<T, U>(input: U): Action<U>;
  syncMethod<T, U>(action: Action<T>): Action<U>;
}

type Connect<T> = {
  [K in keyof T as T[K] extends (...args: any[]) => any ? K : never]: T[K]
};

type F = Connect<Module>;
/**
 * 实现类型 connect, 要求 Connect<Module> 的结果为上面的 Result
 * 如果函数为异步的函数, 要求自动解析出来 Promise 中的了类型
 */

export { }