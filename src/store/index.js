import Vue from 'vue'
import Vuex from 'vuex'
import menus from './menu'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    menu: menus
  },
  getters
})
export default store;
