import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import vuexT from './modules/vuexT'
import getters from './getters'
import Test from './modules/test'
import createPersistedPlugin from './plugins/createPersistedPlugin.js'
const persistedPlugin = createPersistedPlugin()
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    Test,
    vuexT,
    getters
  },
  plugins: [persistedPlugin] // vuex持久化
})
/**
 * 另一种插件
 * https://www.jianshu.com/p/c22861ec5f21
 * vuex持久化 vuex-persistedstate
 */
