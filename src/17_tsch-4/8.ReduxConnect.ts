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
  asyncMethod<T, U>(input: T): Action<U>;
  syncMethod<T, U>(action: Action<T>): Action<U>;
}

type Transform<T> =
  T extends (input: Promise<infer T>) => Promise<Action<infer U>>
  ? (input: T) => Action<U>
  : T extends (action: Action<infer T>) => Action<infer U>
  ? (action: Action<T>) => Action<U>
  : never;

type Connect<T> = {
  [K in keyof T as T[K] extends (...args: any[]) => any ? K : never]: Transform<T[K]>;
};

class MyModule {
  count = 0;
  message = 'hello';

  asyncMethod(input: Promise<number>) {
    return input.then((i) => {
      return {
        payload: i,
        type: 'asyncMethod'
      }
    })
  }

  syncMethod(action: Action<string>) {
    return {
      payload: action.payload,
      type: 'syncMethod'
    }
  }
}

type F = Connect<MyModule>;
/**
 * 实现类型 connect, 要求 Connect<Module> 的结果为上面的 Result
 * 如果函数为异步的函数, 要求自动解析出来 Promise 中的了类型
 */

export { }