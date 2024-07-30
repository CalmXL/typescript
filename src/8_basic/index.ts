// & 交叉类型 和 unknown

// interface Person1 {
//   handsome: string;
//   n: {
//     n: number;
//   }
// }

// interface Person2 {
//   high: string; 
//   n: {
//     n: string;
//   }
// }

// type Person3 = Person1 & Person2;

// type Computed<T> = {
//   [K in keyof T]: T[K]
// }

// type p = Computed<Person3>;

// let p3: Person3 = {
//   handsome: '帅',
//   high: '高',
//   n: {
//     n: 1 // 如果类型冲突会出现 never 
//   }
// } 

// -------------------------------------------

// function mixin<T, K>(o1: T, o2: K) {
//   return {
//     ...o1,
//     ...o2
//   }
// }

// let r = mixin({a: '1'}, {a: 123})

// type IMixin = typeof r;
// type IVal = IMixin['a']; // 交叉类型出现 never


// type a = ('number' | 123) & {};

// ------------------------------------------------
// unknown 是 any 的安全类型 泛型没有赋予值的时候，默认就是 unknown

let val: unknown = true;
// 默认情况下 unknown 必须要进行类型检测才能使用,

function processInput(val: unknown) {
  if (typeof val === 'string') {
    val.toLocaleLowerCase();
  } else if (typeof val === 'number') {
    val.toFixed(2);
  }
}

let name: unknown = 1.23;
(name as number).toFixed(2);

// unknown 在联合类型中和交叉类型中的特点
// unknown 和任何类型做联合类型 都是 unknown
type UnionUnknown = unknown | string | null | undefined;

type InternUnknown = unknown & string; // 获取的类型是 string
type InterAny = any & string; //  => any

// 区分类型是 unknown 还是 any 可以采用交叉类型


type Keyof = keyof any;
type k = keyof unknown; // 不能使用 keyof 来取 unknown 类型, => never

export { }