// 所有的声明文件应该以 .d.ts 结尾
declare let age: number;

// 这里只是类型声明,只是为了防止编辑器报错.
declare function sum(a: number, b: number): number;

declare class Person { }

declare enum Season {
  Spring,
  Winter,
  Summer,
  Autumn
}

declare namespace Zoo {
  export let dog: string = 'dog';
}

declare interface IVue {
  Size: number;
  Color: string;
}

