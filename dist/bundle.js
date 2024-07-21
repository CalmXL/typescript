
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
  'use strict';

  // class Animal {
  //   constructor(public name: string, public age: number) { }
  // }
  // 获取最大值
  class MyArray {
      constructor() {
          this.arr = [];
      }
      set(val) {
          this.arr.push(val);
      }
      getMax() {
          let arr = this.arr;
          let max = arr[0];
          for (let i = 0; i < arr.length; i++) {
              let cur = arr[i];
              if (cur > max) {
                  max = cur;
              }
          }
          return max;
      }
  }
  let arr = new MyArray();
  arr.set(1);
  arr.set(100);
  arr.set(300);
  const res = arr.getMax();
  console.log(res);

})();
//# sourceMappingURL=bundle.js.map
