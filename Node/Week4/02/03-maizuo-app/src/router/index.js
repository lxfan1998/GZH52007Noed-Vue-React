import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 0. 建立组件 1. 定义路由映射表
const routes = [
  // 1. 定义默认的首页展示的内容
  //  方式一：直接定义路由规则
  // {
  //   path: '/',  // 代表访问网站首页的时候，出现的是哪个组件
  //   name: 'movies',
  //   component: ()=>import('../pages/Movies/index.vue')
  // },

  //  方式二：可以使用redirect方式
  {
    path: '/',  // 代表访问网站首页的时候，出现的是哪个组件
    redirect: 'movies',  // 重定向
  },
  {
    path: '/movies',
    name: 'movies',
    // 路由懒加载的特性，为了防止首屏加载的时候因为文件过大导致页面出现留白的现象
    component: ()=>import('../pages/Movies/index.vue')
  },
  {
    path: '/homes',
    name: 'homes',
    component: () => import('../pages/Homes/index.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../pages/News/index.vue')
  },
  {
    path: '/my',
    name: 'my',
    component: () => import('../pages/My/index.vue')
  },
  //  定义一个404页面
  {
    path: '*',  // *代表和上面不匹配后的所有路径
    name: 'notfound',
    component: ()=>import('../pages/NotFound/index.vue')
  }
]

const router = new VueRouter({
  linkActiveClass:'tabs-active',
  routes
})

export default router
