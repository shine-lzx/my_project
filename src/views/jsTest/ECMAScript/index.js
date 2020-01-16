export default function createPerson (name, age, say) {
  var obj = {}
  obj.name = name
  obj.age = age
  obj.say = say
  obj.should = function () {
    console.log(this.say)
  }
  return obj
}

function StringBuffer () {
  this._strings_ = []
}

StringBuffer.prototype.append = function (str) {
  this._strings_.push(str)
}

StringBuffer.prototype.toString = function () {
  return this._strings_.join('')
}