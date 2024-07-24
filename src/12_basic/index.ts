// 装饰器 就是一个函数，只能在类中使用
// 类本身，类的成员使用

/**
 * 装饰器的分类
 * 
 * 1. 类的装饰器
 * 2. 方法装饰器
 * 3. 属性装饰器
 * 4. 访问装饰器
 * 5. 参数装饰器
 */

// experimentalDecorators: true 需要开启
// 1. 类的装饰器 
// 给类进行拓展，也可以返回一个子类重写父类, 一般不会通过类装饰器去拓展类的属性和方法，因为拓展后原来没有的方法无法访问到
// 可以使用 namespace

// const classDecoration = <T extends new (...args: any[]) => any>(target: T) => {
//   // (target as any).type = '动物';
//   // (target as any).getType = function () {
//   //   return this.type;
//   // }

//   // Object.assign(target.prototype, {
//   //   eat () {},
//   //   drink () {}
//   // })
// }

function OverrideAnimal (target: any) {
  return class extends target {
    eat () {
      super.eat();
      console.log('new eat');
    }
  }
}

interface Animal {
  eat(): void;
  drink(): void;
}

// @classDecoration
// @OverrideAnimal

function Enum (isEnum: boolean): MethodDecorator {
  return function (target: any,  propertyKey, descriptor) {
    Object.defineProperties(target, propertyKey, {
      
    })
  }
}

class Animal {
  @enum(false) // 最终装饰器必须返回一个函数
  eat () {
    console.log('动物 original');
  }
}

const animal = new Animal();
// animal.eat();
// animal.drink();

// 方法装饰器
console.log(animal);

