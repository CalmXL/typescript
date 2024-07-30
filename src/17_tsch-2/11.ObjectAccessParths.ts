// 得到对象中的值访问字符串
export type RemoveFirstFlag<T, S extends string> = T extends `${S}${infer R}` ? R : never;

export type ObjectAccessPaths<T, F extends string = '', K = keyof T> =
  // 这里目的将联合类型 K, 进行分发分别取值
  K extends keyof T
  ? T[K] extends object
  // 如果当前的值是对象继续递归，并且将当前解析的key , 添加到结果中
  ? ObjectAccessPaths<T[K], `${F}.${K & string}`>
  : RemoveFirstFlag<`${F}.${K & string}`, '.'>
  : never
  ;

function createI18n<Schema>(
  schema: Schema
): (path: ObjectAccessPaths<Schema>) => void {
  return (path) => { };
}

const i18n = createI18n({
  home: {
    topBar: {
      title: '顶部标题',
      welcome: '欢迎登录'
    },
    bottomBar: {
      notes: 'xxx备案, 归xxx所有'
    }
  },
  login: {
    username: '用户名',
    password: '密码'
  }
})

i18n('home.topBar.title');
i18n('home.topBar.welcome');
i18n('home.bottomBar.notes');

// i18n('home.login');