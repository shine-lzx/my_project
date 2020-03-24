// class InitPerson {
//   constructor(name, age) {
//     this.init(name = 'shine-lzx', age = '25')
//   }
//   init (name, age) {
//     this.name = name
//     this.age = age
//   }
// }

function hobby (target, prop, descriptor) {
  let func = descriptor.value // 获取目标的init方法
  descriptor.value = function () {
    // arguments[0]即第一个参数 => 攻击力
    arguments[0] += '??????????????' // 攻击力+100
    return func.apply(target, arguments) // init(100, 1)
  }
  console.log('descriptor', descriptor)
  return descriptor // 知道为什么要返回它么
}

function testable (target) {
  target.isTestable = true
}

class PersonTwo {
  constructor (name, age) {
    this.init(name, age)
  }
  @testable
  @hobby
  init (name, age) {
    this.name = name
    this.age = age
  }
  print () {
    console.log(`玩家 ==> 名称:${this.name}, 年龄:${this.age}`)
  }
}

export default PersonTwo

/*
语法
1
Object.defineProperty(obj, prop, descriptor)
obj：要在其上定义属性的对象。
prop：要定义或修改的属性的名称。
descriptor：将被定义或修改的属性描述符。
返回值：被传递给函数的对象。
在ES6中，由于 Symbol类型 的特殊性，用 Symbol类型 的值来做对象的key与常规的定义或修改不同，而Object.defineProperty 是定义 key为 Symbol 的属性的方法之一。

也就是说，装饰器本质就是编译时执行的函数。

装饰器函数的第一个参数，就是所要装饰的目标类。
*/