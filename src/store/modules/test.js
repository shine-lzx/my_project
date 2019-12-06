import * as mutationsTypes from '../mutations-type'
const state = {
  numb: 0,
  str: '这是字符串：',
  isShow: false
}

const getters = {
  changeString: state => {
    return {
      newNum: state.numb
    }
  },
  strNumb: (state, gatters) => {
    const { newNum } = gatters.changeString
    state.str = state.str + newNum
    console.log('state.str', state.str)
  }
}

const mutations = {
  [mutationsTypes.ADD_NUM]: (state, numb) => {
    state.numb = state.numb + numb
  },
  [mutationsTypes.SUB_NUM]: (state, numb) => {
    state.numb = state.numb - numb
  },
  [mutationsTypes.CHANGE_STATUS]: (state, isShow) => {
    state.isShow = !state.isShow
  }
}

const actions = {
  handleAdd: ({ commit }, parameter) => {
    commit('ADD_NUM', parameter)
  },
  handleSub: ({ commit }, parameter) => {
    commit('SUB_NUM', parameter)
  },
  handleChange: ({ commit }, parameter) => {
    console.log('parameter:', parameter)
    commit('CHANGE_STATUS', parameter)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
