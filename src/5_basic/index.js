// 类本身就可以充当类型
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// 如果 get 存在, 但没有 set, 则属性自动为 readonly
// 如果不指定 setter 参数类型, 则从 getter 的返回类型推断
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
// class ToArray {
//   convert(value: string): string[];
//   convert(value: number): number [];
//   convert (value: string | number) {
//     if (typeof value === 'string') {
//       return value.split('');
//     } else if (typeof value === 'number') {
//       return value.toString().split('').map(Number)
//     }
//   }
// }
// let toArr = new ToArray();
// let res = toArr.convert(123);
// let res2 = toArr.convert('123');
// export {};
// interface Checkable {
//   check(name: string): boolean;
// }
// class NameChecker implements Checkable {
//   // implements 子句只是检查类可以被视为接口类型
//   check(s) {
//   // Parameter 's' implicitly has an 'any' type.
//     // Notice no error here
//     return s.toLowerCase() === "ok";
//   }
// }
// _----------------------------------------------------
// interface Animal {
//   dateOfBirth: any;
// }
// interface Dog extends Animal {
//   breed: any;
// }
// class AnimalHouse {
//   resident: Animal;
//   constructor(animal: Animal) {
//     this.resident = animal;
//   }
// }
// class DogHouse extends AnimalHouse {
//   // Does not emit JavaScript code,
//   // only ensures the types are correct
//   declare resident: Dog;
//   constructor(dog: Dog) {
//     super(dog);
//   }
// }
// 类的初始化顺序
// class Base {
//   name = "base";
//   constructor() {
//     console.log("My name is " + this.name);
//   }
// }
// class Derived extends Base {
//   name = "derived";
//   // constructor () {
//   //   super();
//   //   console.log(111);
//   // }
// }
// // Prints "base", not "derived"
// const d = new Derived();
/**
 * 为什么会输出 base:
 * js 定义类的初始化的顺序:
 *
 * 基类字段被初始化;
 * 基类构造函数运行;
 * 派生类字段被初始化;
 * 派生类构造函数运行;
 */
// -------------------------------------
// 继承内置类型
var MsgError = /** @class */ (function (_super) {
    __extends(MsgError, _super);
    function MsgError(m) {
        return _super.call(this, m) || this;
        // Object.setPrototypeOf(this, MsgError.prototype);
    }
    MsgError.prototype.sayHello = function () {
        var res = 'Hello ' + this.message;
        console.log(res);
    };
    return MsgError;
}(Error));
var me = new MsgError('error');
console.log(me);
// me.sayHello();
