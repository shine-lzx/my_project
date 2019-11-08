import { login } from '@/api/login/index'
import { getToken } from '@/utils/auth'

const state = {
  token: getToken(),
  name: '',
  avater: '@/assets/a1.ico'
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATER: (state, avater) => {
    state.avater = avater
  }
}

const actions = {
  login ({ commit }, userinfo) {
    const { username, password } = userinfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(res => {
        const data = { res }
        commit('SET_TOKEN', data.token)
        getToken(data.token)
        resolve()
      }).catch(err => {
        reject(err)
      })
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
/**
 *
 * vuex中的store分模块管理，需要在store的index.js中引入各个模块，
 * 为了解决不同模块命名冲突的问题，将不同模块的namespaced:true，
 * 之后在不同页面中引入getter、actions、mutations时，需要加上所属的模块名
 */
