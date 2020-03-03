import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store =  new Vuex.Store({
  state: {
      startPage: 0,
      player: false,
      personal: 0,
      blog: 0,
      app: 'home'
  },
  mutations: {
      passed (state) {
          state.startPage++
      },
      passPersonal (state) {
        state.personal++
      },
      setPlayer (state) {
          state.startPage++
      },
      setBlog (state, payload) {
          state.blog = payload
      },
      setApp (state, payload) {
          state.app = payload
      }
  }
});
