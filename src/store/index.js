import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'
import Test from './modules/test'
import createPersistedPlugin from './plugins/createPersistedPlugin.js'
const persistedPlugin = createPersistedPlugin()
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    Test,
    getters
  },
  plugins: [persistedPlugin] // vuex持久化
})
