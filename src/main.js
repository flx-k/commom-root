// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import { Image,Switch} from 'element-ui';
import Vuex from 'vuex'
import store from './store'
Vue.use(Vuex)
Vue.use(iView);
Vue.use(Image)
Vue.use(Switch)

Vue.config.productionTip = false

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  setTimeout(() => {
    next();    
  }, 500);
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
