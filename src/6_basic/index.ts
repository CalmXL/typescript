/**
 * 1. 接口不能有具体的实现 可以用于描述 函数、混合类型、对象、类
 */



// const fullname = ({ firstName, lastName }: {
//   firstName: string,
//   lastName: string
// }) => {
//   return firstName + lastName;
// } 

// fullname({
//   firstName: 'xu',
//   lastName: 'lei'
// })


// type IFullName = {
//   firstName: string;
//   lastName: string;
// }

// interface IFullName {
//   firstName: string;
//   lastName: string;
// }

// interface IFullName {
//   firstName: string;
//   lastName: string;
// }

// type Ifn = (obj: IFullName) => string

// const fullname: Ifn = ({ firstName, lastName }: IFullName):string => {
//   return firstName + lastName;
// } 
// fullname({
//   firstName: 'xu',
//   lastName: 'lei'
// })

/**
 * type 和 interface 的区别
 * 
 * 1. 如果只是用来描述结构我们采用 interface 
 * 2. 如果涉及到联合类型，则只能使用 type
 * 3. type 不能被拓展，interface 是可以拓展的
 * 4. type 不能重名， interface 重名可以合并
 * 5. type 可以使用循环和条件， interface 不行
 * 
 * 函数类型一般采用 type
 */

// type IFn = {
//   (): number;
//   count: number;
// }

// interface IFn {
//   (): number;
//   count: number;
// }

// const click: IFn = () => {
//   return click.count ++;
// }

// // 为了防止这个 click 函数被重新赋值， let 是可以修改的，如果const 就不一样了饿
// click.count = 0;

// 一般情况下， 使用接口大概率都是描述对象
// interface IVeg { // 接口中声明的都是抽象的，而且是必须要实现
//   readonly color: string;
//   size: number;
//   taste?: 'sweet' | 'sour'; // 可选属性
// }

// const tomato: IVeg = {
//   color: 'red',
//   size: 20,
//   // taste: 'sour'
// }

// tomato.color = 'green'; // 只读属性不能被随意修改

// ________________________________________

interface IVeg { // 接口中声明的都是抽象的，而且是必须要实现
  readonly color: string;
  size: number;
  taste?: 'sweet' | 'sour'; // 可选属性  
  [key: string]: any; // 任意属性，key 为 string, 可以赋予 number, string, symbol
}

interface IV extends IVeg {
  a?: 1
}

const tomato: IVeg = {
  color: 'red',
  size: 20,
  taste: 'sour',
  a: 1, // 如何解决多的属性，让它可以赋予给 IVeg
  1: 1,
  [Symbol()]: 1,
}

// let obj = {
//   color: 'red',
//   size: 20,
//   taste: 'sour',
//   a: 1, 
// }

// const tomato: IVeg = obj;

/**
 * 1. 如果对象中的属性多于接口可以直接采用断言的方式来赋值
 * 2. 可以基于接口特性进行拓展类型
 * 3. 产生一个新的类型
 * 4. 类型兼容
 * 5. 交叉类型
 * 6. 任意类型 (常用于一部分固定，另一部分不固定)
 */

// interface Person {
//   name: string,
//   [key: string]: any;
//   company: {
//     n: 100
//   }
// }


// let p: Person = {
//   name: 'xulei',
//   age: 30,
//   company: {
//     n: 100
//   }
// }

// 数字索引

// interface IArr {
//   [key: number]: any
// }

// let arr: IArr = [1, 2, 3];
// let arr2: IArr = {
//   0: 1,
//   1: 2,
// }

// 通过索引访问符号，取值的类型

// type PersonNameType = Person['name']
// type PersonType = Person[string]

// keyof 取一个对象中 key 的集合 valueOf 取值的类型
// interface ICar {
//   color: string;
//   a: 1,
//   b: 2
// }

// type valueOf = ICar[keyof ICar]; // 通过索引操作符获取值的集合
// type n = Person['company']['n']

// 接口 readonly  ? 任意类型 [key: string]: any 接口[属性key]




interface ChineseSpeakable {
  a: number;
  speakChinese(): void;
}

interface EnglishSpeakable {
  speakEnglish(): void;
}

class Speak implements ChineseSpeakable, EnglishSpeakable {
  public a = 1;

  speakChinese(): void {
    console.log('speaking chinese');
  }

  speakEnglish(): void {
    console.log('speaking english');
    
  }
}

interface MySpeak extends Speak { // 接口可以基于类进行拓展

}


export { };