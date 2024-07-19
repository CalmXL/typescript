(function () {
	'use strict';

	// 以赋予值的结果来进行 内容推导
	// let name = 'xulei';
	// let age = 10;
	// let const
	// const age = 30; // 如果用常量，来自动推导类型就是字面类型
	// let name: string | number;
	// 默认没有赋值的时候，联合类型可以调用公共的方法, why？ 为了安全
	// name = 'xulei';
	// name.toUpperCase()
	// name = 123; // 赋值后会推导类型
	// name.toFixed(2);
	// 字面量类型
	// type Direction  = 'up' | 'down' | 'left' | 'right';
	// let dir:Direction = 'up';
	// type 中定义了使类型， 不是对象
	// type women = {
	//   wealthy: true;
	//   waste: string;
	// } | {
	//   wealthy: false;
	//   normality: string;
	// }
	// 可以利用联合类型来做到属性之间的互斥
	// let richWomen: women = {
	//   wealthy: true,
	//   waste: '浪费'
	// }
	// let  poorWomen: women = {
	//   wealthy: false,
	//   normality:'节俭'
	// }
	// 类型断言(非空断言 这个值一定不为空)
	let ele = document.getElementById('app');
	ele.innerText = '1234';

})();
//# sourceMappingURL=bundle.js.map
