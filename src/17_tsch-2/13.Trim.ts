// 去除空格

// 去除所有空格
// type Trim<T extends string, F extends string = ''> = 
//   T extends `${infer L}${infer R}` 
//   ? L extends ' ' ? Trim<R, `${F}`> : Trim<R, `${F}${L}`>
//   : F;
// ;

type TrimLeft<T extends string> = 
  T extends ` ${infer R}` ? TrimLeft<R> : T; 

type TrimRight<T extends string> = 
T extends `${infer L} ` ? TrimRight<L> : T;

type Trim<T extends string> = TrimRight<TrimLeft<T>>;

type a1 = Trim<' .Ji ang  '>;

export { };