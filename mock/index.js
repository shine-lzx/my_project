import Mock from 'mockjs'

Mock.mock('/login', /post/i, {
  'array|1-10': [
    {
      'name|+1': ['Hello', 'Mock.js', '!']
    }
  ]
})
