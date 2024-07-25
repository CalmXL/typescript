import _ = require('./lodash')

declare module './lodash.d.ts' {
  // function x():void;
  // function y():void;
  // function z():void;

  interface ILodash {
    l(): void;
    m(): void;
    n(): void;
  }
}