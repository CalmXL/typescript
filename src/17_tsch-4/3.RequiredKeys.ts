import { OptionalKeys } from "./1.OptionalKey";

// K extends keyof T ? Omit<T, K> extends T ? K : never : any;
// export type RequiredKeys<T extends object, K = keyof T> =
//   K extends keyof T ? Omit<T, K> extends T ? never : K : any;
//   ;

export type RequiredKeys<T extends object> =
  Exclude<keyof T, OptionalKeys<T>>
  ;

type a1 = RequiredKeys<{
  foo: number | undefined;
  bar?: string;
  flag: boolean;
}>; // foo | flag

type a2 = RequiredKeys<{ foo: number; bar?: string }>;

type a3 = RequiredKeys<{ foo: number; flag: boolean }>;

type a4 = RequiredKeys<{ foo?: number; flag?: boolean }>

type a5 = RequiredKeys<{}>

export { };                                               