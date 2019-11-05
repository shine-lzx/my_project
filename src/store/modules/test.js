const ADD_NUM = 'ADD_NUM'
const SUB_NUM = 'SUB_NUM'

const state = {
  numb: 0,
  str: '这是字符串：'
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
  [ADD_NUM]: (state, numb) => {
    state.numb = state.numb + numb
  },
  [SUB_NUM]: (state, numb) => {
    state.numb = state.numb - numb
  }
}

const actions = {
  handleAdd: ({ commit }, parameter) => {
    commit('ADD_NUM', parameter)
  },
  handleSub: ({ commit }, parameter) => {
    commit('SUB_NUM', parameter)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
