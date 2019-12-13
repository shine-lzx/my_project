class Person {
  constructor (name, age, args) { // constructor是一个构造方法，用来接收参数
    this.name = name // this代表的是实例对象
    this.age = age
    this.args = args
  }
  say () {
    return '我的名字叫' + this.name + '今年' + this.age + '岁了'
  }
  static main () {
    return this.args
  }
}

export default class Worker extends Person {
  constructor (name, age, job) {
    super(name, age)
    this.job = job
  }
  // 子类可以直接调用父类的方法
  userInfo () {
    return '姓名：' + this.name + '年龄：' + this.age + '工作:' + this.job
  }
}
// ------------------------------------------------------------------------------
function readonly (target, key, descriptor) {
  // 可以通过修改descriptor参数实现各种功能
  descriptor.writable = false
  return descriptor
}

class Desc {
  @readonly
  speak () {
    return 'I am Person!'
  }
}

const person = new Desc()
person.speak = () => {
  console.log('I am human')
}
