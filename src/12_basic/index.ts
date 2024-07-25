// 依赖注入
interface Monitor { }

interface Host { }

class Container {
  private instance = new Map(); // 所有的实例
  public properties = new Map(); // 存放属性对应的信息

  bind<T>(key: string, creator: () => T) {
    if (!this.instance.has(key)) {
      this.instance.set(key, creator())
    }
  }

  resolve<T>(key: string): T {
    // 将记录的属性自动的注入到当前的实例上
    let instance = this.instance.get(key);
    for (let prop of this.properties) {
      // Compute-monitor => Monitor
      let [key, ServiceKey] = prop;
      let [className, propName] = key.split('-');

      // 检索是否给当前的类注入
      if (instance.constructor.name !== className) {
        continue;
      }

      // 自动装载
      instance[propName] = this.resolve(ServiceKey)
    }

    return instance;
  }

  bootstrap() {
    console.log('启动电脑', this);
  }
}

const c = new Container();

// 提供到容器中, 自动会创建在实例容器中
@Provide('Monitor')
class Monitor27inch implements Monitor { }
@Provide('Host')
class AppleHost implements Host { }

// DI 依赖注入, 不需要在类中硬编码
@Provide('Computer')
class Computer {
  @Inject('Monitor')
  monitor!: Monitor27inch;
  @Inject('Host')
  host!: AppleHost;

  bootstrap() {
    console.log('启动: ', this);
  }
}


function Provide(key: string) {
  return (target: any) => {
    c.bind(key, () => new target());
  }
}

function Inject(injectKey: string) {
  return (target: object, key: string) => {
    // 当前在哪个原型上 注入了哪些属性,做一个映射关系,稍后解析的时候
    c.properties.set(`${target.constructor.name}-${key}`, injectKey);
    // 关联就是哪个类,对应的哪个属性,用哪个标识找到实例进行赋值
    // console.log(c.properties);
  }
}


const computer = c.resolve<Computer>('Computer');

computer.bootstrap();

export { };