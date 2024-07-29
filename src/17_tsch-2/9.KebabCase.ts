// 驼峰命名法转横杠命名

// 如何匹配大写字母 每个字母转成大写的是不是匹配原来的自己
export type KebabCase<
  T extends string,
  Res extends string = ''
> =
  T extends `${infer L}${infer R}`
  ? KebabCase<R, `${Res}${Capitalize<L> extends L ? `-${Lowercase<L>}` : L}`>
  : Res extends `${infer L}${infer R}`
  ? R
  : never;

type A = KebabCase<'XuLei'>; // => xu-lei
type B = KebabCase<'VueReactAngular'>; // => vue-react-angular

export { };