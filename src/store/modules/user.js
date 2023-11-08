import { getToken, setToken, removeToken } from '@/utils/auth'
const state = {
  token: getToken() // 从缓存中读取初始值
}

const mutations = {
  setToken(state, token) {
    state.token = token
    // 同步缓存
    setToken(token)
  },
  removeToken() {
    // 删除vuex
    state.token = null
    removeToken()
  }
}

const actions = {
  login(context, data) {
    console.log(data)
    // todo代办：调用登录接口

    context.commit('setToken', '123456')
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
