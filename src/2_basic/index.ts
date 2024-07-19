// ts 中的基础类型
// ts 中的类型分类: 
//  内置类型(DOM、Promise、原始方法)
//  基础类型
//  高级类型
//  自定义类型

// ts : 后面的都是类型 = 后面的都是值
// 1. ts 一切从安全的角度来触发，看能不能赋值 就看安全不安全
// 2. ts 在编写的时候是没有代码执行的
// 3. ts 还有自动的类型推导


// let name: string = "xulei";
// let age: number = 28;
// let handsome: boolean = true;

// let s1: string = 'abc';
// // let s2: string = new String();
// let s3: String = 'abc';

// 大写的类型都是包装类

// let arr: number[] = [1, 2];
// let arr2: string[] = ['1', '2'];
// let arr3: (number | string)[] = [1, '2']
// let arr4: Array<string | number> = ['1', '2', 3]

// 元组 规定长度和存储的类型
// let tuple: [string, number, boolean] = ['xulei', 30, true];

// let t = tuple[0];
// let age = tuple[1];
// let b = tuple[2];

// 元组是只读的
// tuple.push('xuhong');

// tuple[3];

// 枚举类型 自带类型的对象
// enum USER_ROLE {
//   USER,
//   ADMIN = 6,
//   MANAGER,
//   OTHER = "ABC" // 异构枚举
// } 
// 如果不需要对象，如果只是使用值，可以直接采用常量枚举， 否则采用普通枚举
// console.log(USER_ROLE[0]);

// null 和 undefined 
// 任何类型的子类型,一般情况下都是严格模式， null 和 undefined 只能赋值给 null 和 undefined

// let str: string = null;

// void 代表函数的返回值为空
// function fn (): void {
//   return undefined
// }

// never 类型 任何类型的子类型

function fn1 (): never {
  // throw new Error();
  while (true){}
}

// 类型保护， 保障程序的不缺失 完整性保护
function validate (val: never) {}
function getResult (strOrNumOrBool: string | number | boolean) {
  if (typeof strOrNumOrBool === "string") {
    return strOrNumOrBool;
  }

  if (typeof strOrNumOrBool === 'number') {
    return strOrNumOrBool;
  }

  if (typeof strOrNumOrBool === 'boolean') {
    return strOrNumOrBool;
  }

  validate(strOrNumOrBool)
}

let union: string | number | boolean | never; // never 和 其他类型联合类型始终是不显示的

// object 对象类型
// {}, Object 不采用， 偶尔使用 {} 表示对象上无任何属性。都可以将任何值赋予给 {} 或 Object
// object 非基础类型

// let obj: Object = 123; // 最大范围
// let obj: {} = 123;

// const create = (target: object) => {}
// create(function() {})
// create({})
// create(new Set())
// create([])

// Symbol BigInt
let s1: Symbol = Symbol.for("1");
let s2: Symbol = Symbol.for('1');

console.log(s1 === s2); // => true

let b1: bigint = BigInt(Number.MAX_SAFE_INTEGER);

// any 任何类型 anyScript, 有时候我们要对类型做转化，无法直接转化，你认为可以这个值赋予给任何类型

// let str:any = function() {}
let name2; // 声明一个变量 不给类型默认就是 any 类型
// ts 会根据你赋予的类型来进行类型提导

// 模块之间的隔离
export {}; 