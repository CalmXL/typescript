import 'reflect-metadata';

// class Animal {
//   static type = "动物";
//   eat () {}
// }

// Reflect.defineMetadata('Class', 'Animal metadata', Animal);
// Reflect.defineMetadata('Class Property', 'type metadata', Animal, 'type');
// Reflect.defineMetadata('Proto method', 'eat metadata', Animal.prototype, 'eat');

/**
 * 内部 使用 weakmap 
 * {
 *    Animal: {
 *        undefined: {"Class": "Animal metadata"},
 *        type: { "Class Property": "type metadata"}
 *    },
 *    Animal.prototype: {
 *      "eat": {
 *        "Proto method": "eat metadata"
 *      }
 *    }
 * }
 */

// console.log(Reflect.getMetadata('Class', Animal));
// console.log(Reflect.getMetadata('Class Property', Animal, 'type'));
// console.log(Reflect.getMetadata('Proto method', Animal.prototype, 'eat'));


@Reflect.metadata('Class', 'Animal metadata')
class Animal {
  @Reflect.metadata('Class Property', 'type metadata')
  static type = "动物";

  @Reflect.metadata('Proto method', 'eat metadata')
  eat () {}
}



export {};