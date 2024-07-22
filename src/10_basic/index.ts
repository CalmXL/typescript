// 内置类型值之条件类型

// 正产判断类型 可以通过 A extends B A 是 B 的子类型

// 1. A 类型是通过泛型传入的
// 2. A 类型如果是联合类型会进行分发
// 3. 泛型参数 A 必须是完全裸露的，才具备分发能力 
// 4. 裸类型就是只有自己, 自己没和别人发生关系

interface Bird {
  name: '鸟'
}

interface Fish {
  name: '鱼'
}

interface Sky {
  name: '天空'
}

interface Water {
  name: '水'
}

type Conditional = Fish | Bird extends Fish ? Water : Sky;// 此情况并没有产生分发

type Conditional2<T> = T extends Fish ? Water : Sky;

/**
 * Bird -> Sky
 * Fish -> Water
 * 
 * 将联合类型中的每一项单独比较
 */
type r = Conditional2<Fish | Bird>

// 默认情况下，有些时候我们需要关闭这种分发能力，会造成判断不准确
type Conditional3<T, U> = T extends U ? true : false;
type R2 = Conditional3<1 | 2, 1>;

// 分发就是挨个比较，不想分发就是将结果运算后再比较

// 禁用分发机制
type NoDistribute<T> = T & {}; // 只是为了让这个 T 产生一个新类型而已
type Conditional4<T, U> = NoDistribute<T> extends U ? true : false;
type R3 = Conditional4<1 | 2, 1>;


type Conditional5<T, U> = [T] extends U ? true : false;
type R4 = Conditional5<1 | 2, 1>;

// 条件判断还有些注意事项
type IsNever<T> = T extends never ? true : false;

// never 直接比较的时候无法返回正确的结果
type R5 = IsNever<never>; // => never 

// 我们在进行类型父子关系的比较时，默认情况下都应该关闭分发
// 通过条件类型: Ts 自己实现了一些常见的内置类型

// 内置1 Extract 抽离
// type R6 = Extract<1 | 2 | 3, 1 | 2 | 4>; // 求交集,第一个和第二个的公共部分
type MyExtract<T, U> = T extends U ? T : never;
type R6 = MyExtract<1 | 2 | 3, 1 | 2 | 4>; // 求交集,第一个和第二个的公共部分

// 排除
type MyExclude<T, U> = T extends U ? never : T;
// type R7 = Exclude<1 | 2 | 3 | 4 | 5, 2 | 4>;
type R7 = MyExclude<1 | 2 | 3 | 4 | 5, 2 | 4>;


// NonNullable
type MyNonNullable<T> = T & {};
// type R8 = NonNullable<1 | 2 | null | undefined>
type R8 = MyNonNullable<1 | 2 | null | undefined>

type x1 = null & {}; // => never 
type x2 = undefined & {}; // => never

// 可以求联合类型的交集和差集 Extract, Exclude 可以求对象属性的交集和差集

// infer 类型推断
// infer 可以在条件类型中提取类型的某一个部分,
// 在使用的时候想获取什么类类型就将它写在什么地方,加一个变量可以自动推导
// 类型推导都是基于位置的

// 获取函数的返回值类型
function getObj(name: string, age: number) {
  return {
    name,
    age
  }
}

// 使用 infer 需要先创建一个条件才行
type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : never;
type R9 = ReturnType<typeof getObj>

type MyParameters<T extends (...args: any[]) => any> =
  T extends (...args: infer P) => any ? P : never
// type R10 = Parameters<typeof getObj>
type R10 = MyParameters<typeof getObj>




export { }