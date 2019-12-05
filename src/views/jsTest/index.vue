<template>
  <div>123</div>
</template>

<script>
export default {
  name: 'js测试',
  data () {
    return {}
  },
  created () {
    this.test()
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
      for (let i in obj) {
        console.log('obj', obj[i])
      }
    }
  }
}
</script>
