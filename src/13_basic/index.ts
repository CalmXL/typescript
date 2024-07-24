// 类型保护 通过判断 去识别类型, 核心就是进行类型的收窄

// 通过 js 手段来判断类型 typeof | instanceof | in 拥有类型收窄的功能
// 通过 ts 手段 (可辨识联合类型) 自定义类型保护 null 保护(判断非空后,再去使用)
function double(val: number | string) {
  if (typeof val === 'string') {
    val.charAt(1);
  } else {
    val.toFixed(2);
  }
}

class Person { }
class Dog { }

function getInstance(clazz: new () => Dog | Person) {
  return new clazz();
}


let instance = getInstance(Person);
if (instance instanceof Person) {
  instance
} else {
  instance
}

interface Bird {
  kind: 'bird';
  flt: string;
}

interface Fish {
  kind: 'fish';
  swimming: string;
}

function getAnimal(animal: Bird | Fish) {

  if (isBird(animal)) {
    animal
  } else {
    animal
  }

  // if (animal.kind === 'bird') { // 联合类型可以访问共同存在的类型, 识别类型
  //   animal
  // } else {
  //   animal
  // }

  // if ('swimming' in animal) {
  //   animal
  // } else {
  //   animal
  // }
}

function isBird(animal: Bird | Fish): animal is Bird {
  return animal.kind === 'bird';
}

function isString(val: unknown) {
  return typeof val === 'string';
}

const addPrefix = (num?: number) => {
  num = num || 100;

  num // -> number
  // ts 静态检测
  function fn() {
    // 内部方法无法解析外层函数的默认止值
    return '$' + num!.toString()
  }

  return fn();
}

addPrefix();


// 只要能够通过结构来进行判断的,都能达到类型保护的特性
function ensureArray<T>(input: T | T[]): T[] {
  if (Array.isArray(input)) {
    return input;
  } else {
    return [input]
  }
}

export { };