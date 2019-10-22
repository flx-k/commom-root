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
import axios from 'axios'
import {post,fetch,patch,put} from './util/http'
import formatDate from './util/time'
Vue.use(Vuex)
Vue.use(iView);
Vue.use(Image)
Vue.use(Switch)
Vue.config.productionTip = false
Vue.prototype.$post=post;
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
