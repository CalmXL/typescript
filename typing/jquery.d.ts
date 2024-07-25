interface $ {
  height(val: number): this;
  width(val: number): this;
  extend(obj): this;
}
// declare function $ (val: string): $;

declare const $: {
  (val: string): $;
}
