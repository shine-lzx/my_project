<template>
  <div>
    <mySlot :List="books">
      <template v-slot:title>
        <span>
          <i class="el-icon-notebook-2"></i>
          {{title}}
        </span>
      </template>
      <!-- <template v-slot:content>
        <div>
          <div v-for="(item, i) in books" :key="i">
            <i :class="item.icon" :style="renderColor(item.color)"></i>
            {{ item.name }}
          </div>
        </div>
      </template>-->
      <!--
        作用域插槽允许我们将子组件的数据传给父组件
       -->
      <template v-slot:item="{ row }">
        <i :class="row.icon" :style="renderColor(row.color)"></i>
        {{ row.name }}
      </template>
    </mySlot>
  </div>
</template>

<script>
import mySlot from './mySlot/index'
import _ from 'lodash'
export default {
  name: 'js测试',
  components: {
    mySlot
  },
  data () {
    return {
      title: '书籍列表',
      books: [
        { name: 'Dom编程艺术', icon: 'el-icon-sunny', color: 'red' },
        { name: '你不知道的Javascript', icon: 'el-icon-orange', color: 'blue' },
        { name: 'CSS世界', icon: 'el-icon-potato-strips', color: 'pink' },
        { name: 'HTML入门教程', icon: 'el-icon-lollipop', color: 'green' }
      ]
    }
  },
  created () {
    this.objectFreeze()
    // this.test()
    // this.testObj()
  },
  methods: {
    renderColor (color) {
      return 'color:' + color
    },
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
    },
    objectFreeze () {
      let obj = { name: 'sun', age: '18' }
      // Object.freeze(obj) // 冻结对象
      obj.name = 'shine'
      console.log(obj) // vue.runtime.esm.js?2b0e:619 [Vue warn]: Error in created hook: "TypeError: Cannot assign to read only property 'name' of object '#<Object>'"
    }
  }
}
</script>
