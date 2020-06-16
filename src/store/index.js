import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    loginPromise: null,
    look:[]
  },
  mutations: {
    //登陆状态
    changeIsLogin(state, { isLogin }) {
      state.isLogin = isLogin
    },
    //异步执行
    changeLoginPromise(state, { loginPromise }) {
      state.loginPromise = loginPromise
    },
    //订阅列表
    changeLook(state,{look}){
      state.look = look
    }
  },
  actions: {}
})