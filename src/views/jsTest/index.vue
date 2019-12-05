<template>
  <div>123</div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'js测试',
  data () {
    return {}
  },
  created () {
    this.test()
    this.testObj()
  },
  methods: {
    test () {
      let obj = {
        name: '王炸',
        children: {
          name: '0',
          children: {
            name: '1',
            children: {
              name: '2',
              children: {
                name: '3',
                children: {
                  name: '4',
                  children: {
                    name: '5',
                    children: {
                      name: '6',
                      arr: ['6666666666']
                    }
                  }
                }
              }
            }
          }
        }
      }
      Object.defineProperty(obj, 'age', {
        value: 18,
        enumerable: true, // 是否可枚举
        writable: true // 是否可改变
      })
      let a = Object.getOwnPropertyNames(obj)
      console.log(a)
      // for (let i in obj) {
      //   console.log('obj', obj[i])
      // }
    },
    testObj () {
      let arr = [0, 1, 2, 3, 4]
      let obj = { value: '1' }
      console.log(_.isEmpty(obj))
      let users = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred', 'age': 40, 'active': false }
      ]
      // let newData = _.filter(users, o => { return !o.active })
      let newData = users.filter(item => item.age > 36)
      let newArr = arr.find(item => item > 10)
      console.log('newArr', newArr)
      console.log(newData)
    }
  }
}
</script>
