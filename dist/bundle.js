
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
(function () {
  'use strict';

  // @classDecoration
  // @OverrideAnimal
  class Animal {
      eat() {
          console.log('动物 original');
      }
  }
  const animal = new Animal();
  // animal.eat();
  // animal.drink();
  // 方法装饰器
  console.log(animal);

})();
//# sourceMappingURL=bundle.js.map
