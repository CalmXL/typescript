// 横杠命名转化为驼峰命名

type CamelCase<
  T extends string, 
  Res extends string = ''
> = any;

type A1 = CamelCase<'handle-open-flag'>; // => HandleOPenFlag
type A2 = CamelCase<'open-flag'>; // => OpenFlag

export { };