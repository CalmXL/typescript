/// <reference path="./lodash_a.d.ts" />
// types="node" 可以指定引入某个内置包
// 可以多个引入
// 三斜线指令

declare namespace _ {
  // function a(): void;
  // function b(): void;
  // function c(): void;
  interface ILodash {
    a(): void;
    b(): void;
    c(): void;
  }
}

const _: _.ILodash;
// 模块后,必须导入
export = _;
export as namespace _;