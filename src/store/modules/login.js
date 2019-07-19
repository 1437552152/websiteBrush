'user strict'
let state = {
  LoginData: Object,
  lang: localStorage.getItem("Languages")
}
const actions = {
  LoginingStatus({
    commit
  }) {
    commit('Logining')
  }
}
const mutations = {
  Logining(state, data) {
    state.LoginData = data.data
  },
  setlang(state, lang) {
    state.lang = lang;
    localStorage.setItem("Languages", lang);
  }
}
const getters = {
  lang(state) {
    return state.lang
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
