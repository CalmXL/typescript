
function Echo(val: string) {
  return function (
    target: object,
    key?: string,
    descriptor?: any
  ) {
    console.log(val, target, key, descriptor);
  }
}

// 从下到上执行
@Echo("类的修饰符4")
@Echo("类的修饰符3")
@Echo("类的修饰符2")
@Echo("类的修饰符1")
class Flow {
  constructor(@Echo('构造函数的装饰器') str: string) {

  }

  @Echo('静态方法')
  static getType () {
    return this.type;
  }

  @Echo('静态属性')
  static type = 'xxx';

  @Echo('属性访问器')
  get value () {
    return 'aaa'
  }
 
  @Echo('原型方法')
  handler(@Echo('原型方法参数') str: any) {

  }

  @Echo('实例属性')
  name!: string;
}

/**
 * 执行流程
 * 
 * [实例属性 方法 属性方法]: 定义在前面的先执行
 * [静态属性, 静态方法]
 * [构造函数]
 * [类的装饰器]
 */

// 一个函数 对原来的内容不断包裹 (洋葱模型)

// 装饰器一般会搭配 反射 来使用
// 元数据? 用来描述数据的数据 备注,存起来, 后续通过批注来处理进行操作,对数据的操作
// 反射



export { };