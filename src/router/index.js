import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component:  welcom => require(['@/components/Null'], welcom),
    },
    {
      path: '/setting',
      name: '首页',
      component:  welcom => require(['@/components/Setting'], welcom),
      children:[
        {
          path: 'theme',
          name: '主题',
          component:  welcom => require(['@/components/setting/theme'], welcom),
        },{
          path: 'authority',
          name: '权限',
          component:  welcom => require(['@/components/setting/authority'], welcom),
        },{
          path: 'plugs',
          name: '插件',
          component:  welcom => require(['@/components/setting/plugs'], welcom),
        },
      ]
    }
  ]
})
