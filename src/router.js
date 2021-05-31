import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '登陆',
      component: () => import('./components/login'),
    },
    {
      path: '/index',
      name: '主页',
      component: () => import('./components/Base'),
      children: [
        {
          path: '/',
          name: '首页',
          component: () => import('./components/BookList')
        }
      ]
    },
    {
      path: '/categoryReport',
      name: '图书大分类报表',
      component: () => import('./components/Base'),
      children: [
        {
          path: '/',
          name: '图书大分类报表',
          component: () => import('./components/categoryReport')
        }
      ]
    },
    {
      path: '/smallCategory',
      name: '图书小分类报表',
      component: () => import('./components/Base'),
      children: [
        {
          path: '/',
          name: '图书小分类报表',
          component: () => import('./components/smallCategoryReport')
        }
      ]
    },
    {
      path: '/price',
      name: '图书价格报表',
      component: () => import('./components/Base'),
      children: [
        {
          path: '/',
          name: '图书价格报表',
          component: () => import('./components/priceReport')
        }
      ]
    },
    {
      path: '/pub',
      name: '图书出版社统计',
      component: () => import('./components/Base'),
      children: [
        {
          path: '/',
          name: '图书出版社统计',
          component: () => import('./components/pubReport')
        }
      ]
    }
  ]
})
