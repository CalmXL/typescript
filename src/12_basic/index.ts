
import 'reflect-metadata'

// const REQUIRED_KEY = Symbol();
// function Required() {
//   return function (
//     target: object,
//     key: string
//   ) {
//     // 先记录哪些属性是必填的. 效验的时候来找这些属性是否有值

//     // 在记录的时候不要给属性添加, 后续效验如果没这个属性, 那就找不到记录了
//     const requiredKeys: string[] = Reflect.getMetadata(REQUIRED_KEY, target) || [];

//     Reflect.defineMetadata(REQUIRED_KEY, [...requiredKeys, key], target)
//   }
// }

// function validate(instance: object) {
//   let existKeys = Reflect.ownKeys(instance);

//   const requiredKeys = Reflect.getMetadata(REQUIRED_KEY, instance);

//   for (let key of requiredKeys) {
//     if (!existKeys.includes(key)) {
//       throw new Error('this is ' + key + ' is not exist');
//     }
//   }
// }


// class Person {
//   @Required()
//   name!: string;
//   @Required()
//   age!: number;
// }

// // 1. 先要求属性必填

// const p = new Person();
// p.name = '123';

// validate(p);

// ********************************************

// function Required() {
//   return function (target: object, key: string) {}
// }
// function validate () {}

// class Person {
//   @Required()
//   name!: string;
//   @Required()
//   age!: number;
// }

// // 1. 先要求属性必填

// const p = new Person();
// // -- @ts-ignore 不管有咩有错误, 丧失效验
// // @ts-expect-error  确定下一行报错
// // 
// p.name = 13; // 效验: 提示 name 属性是字符串而非 number

// validate(p);

// *********************************************

const REQUIRED_KEY = Symbol();
const VALIDATE_TYPE_KEY = Symbol();
function Required() {
  return function (
    target: object,
    key: string
  ) {
    // 先记录哪些属性是必填的. 效验的时候来找这些属性是否有值

    // 在记录的时候不要给属性添加, 后续效验如果没这个属性, 那就找不到记录了
    const requiredKeys: string[] = Reflect.getMetadata(REQUIRED_KEY, target) || [];

    Reflect.defineMetadata(REQUIRED_KEY, [...requiredKeys, key], target)
  }
}

function validate(instance: any) {
  let existKeys = Reflect.ownKeys(instance);

  const requiredKeys = Reflect.getMetadata(REQUIRED_KEY, instance);


  for (let key of requiredKeys) {
    const validateType = Reflect.getMetadata(VALIDATE_TYPE_KEY, instance, key);
    
    if (!existKeys.includes(key)) {
      throw new Error('this is ' + key + ' is not exist');
    }

    if (validateType) {
      if (typeof instance[key] !== validateType) {
        throw new Error(`这个 ${key} 类型不正确, 应为 ${validateType} `);
      }
    }
  }


}

function ValueType(type: Type) {
  return function (
    target: object,
    key: string
  ) {
    // 描述当前属性的类型
    Reflect.defineMetadata(VALIDATE_TYPE_KEY, type, target, key);
  }
}

enum Type {
  String = 'string',
  Number = 'number'
}

class Person {
  @ValueType(Type.String)
  @Required()
  name!: string;
  @ValueType(Type.Number)
  @Required()
  age!: number;
}

const p = new Person();
p.name = 'xl';
// p.age = 123;

validate(p);

// 装饰器 + 反射元数据 可以做一些校验, 后续处理一些逻辑.

export { };