// 模板字符串类型 类似于 es6 中的模板字符串

// 可以将多个字符串类型进行组装
type name = 'xl';
type age = 30;

type sayName = `hi, ${ name } ${ age }` // 就是 es 6 的模板字符串
let r: sayName = "hi, xl 30";

// 模板字符串也是具备分发能力

// margin-top | margin-bottom | margin-right | margin-left
type margin = 'margin';

type direction = 'top' | 'right' | 'bottom' | 'left';

// 在模板字面中的每个差值的位置,联合是交叉相乘的
type Md = `${margin}-${direction}`;
let md: Md = 'margin-top';

// 购物 sku 1.0, 2.0, 3.0 20, 30, 40
type IR = '1.0' | '2.0' | '3.0';
type IL = 20 | 30 | 40;

type IRL = `${IR}-${IL}`


// 放到字符串的东西需要约束, 必须能转化成字符串
type Types = string | boolean | null | undefined | number | bigint;
type sayHello<T extends Types> = `hello, ${T}`;

let s1: sayHello<Types> = `hello, ${ undefined }`;
console.log(s1);

type R1 = sayHello<'xl'>
type R2 = sayHello<30>;
type R3 = sayHello<number>;

// 所有基础类型的模板字符串都是字面量类型的父类型
type Iflag = R2 extends R3 ? true : false;

// 将对象的属性进行重命名操作

type Person = {
  name: string;
  age: number;
  address: string;
}

type P<T> = { // 模板字符串进行变量的重命名
  [K in keyof T as `r_${K & string}`]: T[K];
}

type ReType = P<Person>;


// 字符串可以支持工具类型 UpperCase LowerCase CapitalCase UpCapitalCase
let person: Person = {
  name: 'xl',
  age: 20,
  address: 'sh'
}

type WithGetter<T> = {
  [K in keyof T as `get${Capitalize<K & string>}`]?: () => T[K]
}
type Compute<T> = { [K in keyof T]: T[K]}
type WithGetterType = Compute<WithGetter<Person>>
let personGetter: WithGetter<Person> = {
  getName() {
    return person.name;
  },

  getAge() {
    return person.age;
  },

  getAddress () {
    return person.address;
  }

}

// 根据模式匹配符来取类型 
// infer 可以进行位置推断
// 可以推断数组 | 元组 | string

type GetNameFirstChar<T> = T extends `${infer F} ${infer X}` ? F : never;

type FirstChar = GetNameFirstChar<'xu lei'>;

export {};
