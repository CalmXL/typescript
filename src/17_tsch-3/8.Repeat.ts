
type Repeat<T, C extends number, F extends any[] = []> =
  C extends F['length'] ?
  F :
  Repeat<T, C, [...F, T]>;

type A = Repeat<number, 3>;
type B = Repeat<string, 2>;
type C = Repeat<1, 1>;
type D = Repeat<0, 10>;

export { }
