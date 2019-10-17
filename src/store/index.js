import Vue from 'vue'
import Vuex from 'vuex'
import menus from './menu'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    menu: menus
  }
})
export default store;
