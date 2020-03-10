import * as mutationsTypes from '../mutations-type'
const state = {
  uname: 'shine-lzx'
}

const getters = {}

const mutations = {
  [mutationsTypes.CHANGE_TITLE_NAME]: (state, uname) => {
    state.uname = uname
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
