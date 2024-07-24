// 装饰器: Decorator
// 要启用对装饰器的实验性 需启用 experimentalDecorators


/**
 * 1. 每个装饰器的表达式都是从上到下计算的.
 * 2. 然后将结果作为函数从下到上调用.
 */
// function first() {
//   console.log("first(): factory evaluated");
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log("first(): called");
//   };
// }
 
// function second() {
//   console.log("second(): factory evaluated");
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//     console.log("second(): called");
//   };
// }
 
// class ExampleClass {
//   @first()
//   @second()
//   method() {}
// }


// 类装饰器

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    reportingURL = "http://www...";
  };
}

// @sealed
@reportableClassDecorator
class BugReport {
  type = "report";
  title: string;
 
  constructor(t: string) {
    this.title = t;
  }
}

// function sealed(constructor: Function) {
//   Object.seal(constructor);
//   Object.seal(constructor.prototype);
// }

const bugReport = new BugReport('Needs dark mode');
console.log(bugReport.title);
console.log(bugReport.type);
/**
 * 我们通过类装饰器修改了传递给它的类的构造函数, 以添加一个新的属性 reportingURL.
 * 这个装饰器不会改变原始类的 TypeScript 类型定义.
 * 因此 ts 编译器不会知道 BugReport 类存在实例属性 reportingURL.
 */
console.log((bugReport as any).reportingURL);


export {};