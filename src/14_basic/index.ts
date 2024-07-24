// 模板字符串类型 类似于 es6 中的模板字符串

// 可以将多个字符串类型进行组装
type name = 'xl';
type age = 30;

type sayName = `hi, ${ name } ${ age }` // 就是 es 6 的模板字符串
let r: sayName = "hi, xl 30";

// 模板字符串也是具备分发能力

// margin-top | margin-bottom | margin-right | margin-left
type margin = 'margin';

type direction = 'top' | 'right' | 'bottom' | 'left';

// 在模板字面中的每个差值的位置,联合是交叉相乘的
type Md = `${margin}-${direction}`;
let md: Md = 'margin-top';

// 购物 sku 1.0, 2.0, 3.0 20, 30, 40
type IR = '1.0' | '2.0' | '3.0';
type IL = 20 | 30 | 40;

type IRL = `${IR}-${IL}`


// 放到字符串的东西需要约束, 必须能转化成字符串
type Types = string | boolean | null | undefined | number | bigint;
type sayHello<T extends Types> = `hello, ${T}`;

let s1: sayHello<Types> = `hello, ${ undefined }`;
console.log(s1);


export {};
