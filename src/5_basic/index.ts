// 类本身就可以充当类型

// Ts 中要求所有的属性必须先声明，在使用 (采用修饰符声明)
// 1) 实例属性
// class Circle {
//   public x!:number;
//   public y!:number;

//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
// }

// public 公共属性， 父、子、外界 都能访问  默认就是 public 
// protected 受保护的 父、子
// private 只有自己可以访问
// readonly 仅读属性 只能初始化的时候赋值，后续不能修改
// class Animal {
//   // #xxx="abc" // js 语法 新增的
//   // constructor(public name: string, public age: number) {}
//   // constructor(protected name: string, private age: number) {}
//   constructor(public readonly name: string, private age: number) {
//     this.name = 'abc';
//   }

// } 

// class Cat extends Animal {
//   constructor(name:string, age: number) {
//     super(name, age)
//     // this.name; // 子 可以访问父亲
//     // this.name = 123;
//   }
// }

// // const animal = new Animal('panda', 10);
// // console.log(animal);

// const tom = new Cat('tom cat', 5);
// // co个sole.log(tom.name); // 报错

// // 使用此方式可以访问私有属性，绕过 ts 检测
// console.log(tom['name']);


// 类的功能 主要是实例属性、原型属性、静态属性、属性访问器

// 2) 属性访问器
// 类中的 Object.defineProperty === 属性访问器
// class Animal {
//   // 静态的属性
//   static habitat = '地球';
  
//   static getHabitat () {
//     return this.habitat
//   }

//   private _sound: string = '';
//   constructor(public name:string, public age:number) {}

//   get sound() {
//     return this._sound;
//   }

//   set sound(value: string) {
//     this._sound = value;
//   }
  
//   eat (food: string):void {
//     console.log('to eating ' + food);
//   }
// }

// class Cat extends Animal {
//   constructor(name: string, age: number) {
//     super(name, age);
//   }

//   static getHabitat () {
//     console.log('at home');
//     return super.getHabitat()
//   }

//   eat(): void { // 子类重写父类，要保证兼容父类的类型
//     super.eat('yuyu');
//     console.log('eating maoliang');
//   }
// }

// let cat = new Cat('cat', 100);
// cat.sound = 'miaomaio';
// console.log(cat);
// cat.eat();

// console.log(Cat.habitat);
// const habitat = Cat.getHabitat()
// console.log(habitat);
// console.log(Cat.getHabitat());
// super 原型方法指向实例 ， 构造函数和静态方法指向父类
 
// class X {
//   private constructor() {

//   }
// }

// new X(); // => 类“X”的构造函数是私有的，仅可在类声明中访问。


// class Singleton {
//   private static instance = new Singleton();
//   private constructor() {}

//   static getInstance() {
//     return this.instance;
//   }
// }

// let ins1 = Singleton.getInstance();
// let ins2 = Singleton.getInstance();

// console.log(ins1 === ins2); // => true


// 抽象类
// 1. 不能被 new 
// 2. 抽象类中可以创建抽象属性和方法，但是静态方法属性不可以
// 3. 抽象类中可以拥有具体的实现
// abstract class Person {

// }

// let p = new Person();

// abstract class Animal {
//   // abstract static habitat = "地球"

//   static habitat = '地球';
//   abstract eat():void; // 描述原型方法
//   abstract play: () => void; //这种用来描述实例方法
//   // 默认我们采用 eat 形式

//   drink() {
//     console.log('喝水');
    
//   }
// }

// class Cat extends Animal {
//   public play!: () => void;
//   eat():void {
//     console.log('eating');
//   }
// }

// let cat = new Cat();
// console.log(cat);


class ToArray {
  convert(value: string): string[];
  convert(value: number): number [];
  convert (value: string | number) {

    if (typeof value === 'string') {
      return value.split('');
    } else if (typeof value === 'number') {
      return value.toString().split('').map(Number)
    }
  }
}

let toArr = new ToArray();

let res = toArr.convert(123);
let res2 = toArr.convert('123');

export {};