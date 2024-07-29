// 3. 子类互斥

interface Man1 {
  fortune: string;
}

interface Man2 {
  funny: string;
}

interface Man3 {
  foreign: string;
}

// 希望 ManType 其中的一个类型
type ManType = Man1 | Man2 | Man3;


let man: ManType = {
  fortune: '富有',
  foreign: '洋派',
  funny: '风趣',
}

// 互斥属性

// man1 - man2 将 man1 的属性标记成 never + man2
// man2 - man1 将 man2 的属性标记成 never + man1

type DiscardType<T, U> = {
  [K in Exclude<keyof T , keyof U>] ?: never;
};

type T1 = DiscardType<Man1, Man2> & Man2;
type Computed<T> = {
  [K in keyof T]: T[K]
}
type R = Computed<T1>;

type OrType<T, U> = DiscardType<T, U> & U | DiscardType<U, T> & T;

type ManType2 = OrType<OrType<Man1, Man2>, Man3>

type R2 = Computed<ManType2>

let man2: ManType2 = {
  // foreign: 'yp',
  // funny: 'c',
  fortune: 'fortune'
}


// 核心就是排除你的属性, 在我的结构里将你的属性定义成 never
export {};