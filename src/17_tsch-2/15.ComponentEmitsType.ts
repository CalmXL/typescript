// 定义组件的监听事件的类型

import { CamelCase } from './10.CamelCase';

type ComponentEmitsType<
  T extends object,
  K = keyof T,
> = {
    [
    K in keyof T as `on${CamelCase<K & string>}`
    ]: T[K] extends (...args: infer P) => any
    ? (...args: P) => void
    : never;
  }

type a1 = {
  "handle-open": (flag: boolean) => true;
  "preview-item": (data: { item: any; index: number }) => true;
  "close-item": (data: { item: any; index: number }) => true;
}

type a2 = ComponentEmitsType<a1>;


/**
 * {
 *    onHandleOpen ?: (flag: boolean) => void;
 *    onPreviewItem ?: (data: { item: any. index: number}) => void;
 *    onCloseItem ?: (data: { item: any. index: number}) => void;
 * }
 */

export { };