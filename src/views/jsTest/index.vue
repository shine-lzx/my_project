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
// import { arrData } from './data.js'
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
    console.log(this.dispose())
    // console.log(this.theShortestWord())
    // this.objectFreeze()
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
    },
    arrTip () {
      let nums = [0, 0, 1, 2]
      let max = Math.max(...nums)
      let i = nums.findIndex(v => v === max)
      nums.splice(i, 1)
      let str = nums.map(v => {
        return max > (v * 2) ? 1 : -1
      })
      return str.every(v => v === 1) ? i : -1
    },
    theShortestWord () {
      let licensePlate = '13 456TEs'
      let words = ['looks', 'pest', 'stew', 'show']
      let regValue = licensePlate.replace(/[^a-zA-Z]/g, '').toLowerCase()
      let str = words.map(v => {
        if (v.search(regValue) !== -1) {
          return v
        }
      })
      str = str.filter(v => v !== undefined)
      str = str.map(v => {
        return v
      })
      return str
    },
    arrSum () {
      /*
      total必需。初始值, 或者计算结束后的返回值。
      currentValue必需。当前元素
      currentIndex可选。当前元素的索引
      arr可选。当前元素所属的数组对象。
      */
      // let K = 100
      let A = [1, 2, 5, 9, 77, 22, 66]
      return A.reduce((prev, curr, idx, arr) => {
        return prev + curr
      })
    },
    dispose () {
      // let arr = [1, 2, 3, 4]
      // return arr.reduce((prev, curr, idx, arr) => {
      //   console.log('初始值, 或者计算结束后的返回值', prev)
      //   console.log('当前元素', curr)
      //   console.log('当前元素的索引', idx)
      //   console.log('当前元素所属的数组对象', arr)
      //   console.log('----------------------')
      //   return prev + curr
      // }, 5)
      // let obj = {}
      let person = [
        { id: 0, name: '小明' },
        { id: 1, name: '小张' },
        { id: 2, name: '小李' },
        { id: 3, name: '小孙' },
        { id: 1, name: '小周' },
        { id: 2, name: '小陈' }
      ]
      return person.reduce((cur, next) => {
        // obj[next.id] ? '' : obj[next.id] = true && cur.push(next)
        // return cur
      }, []) // 设置cur默认类型为数组，并且初始值为空的数组
    }
  }
}
</script>
