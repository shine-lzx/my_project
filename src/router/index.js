import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    hidden: true,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Dashboard', icon: 'dashboard' }
      }
    ]
  },

  {
    path: '/Myform',
    component: Layout,
    meta: {
      title: 'Myform',
      icon: 'nested'
    },
    children: [
      {
        path: 'Myform',
        name: 'Myform',
        component: () => import('@/views/Myform/index'),
        meta: { title: 'Myform', icon: 'form' }
      }
    ]
  },

  {
    path: '/MyFile',
    component: Layout,
    meta: {
      title: 'MyFile',
      icon: 'nested'
    },
    children: [
      {
        path: 'MyFile',
        name: 'MyFile',
        component: () => import('@/views/MyFile/index'),
        meta: { title: 'exampleFile', icon: 'example' }
      }
    ]
  },
  {
    path: '/jsTest',
    component: Layout,
    meta: {
      title: 'jsTest',
      icon: 'nested'
    },
    children: [
      {
        path: 'jsTest',
        name: 'jsTest',
        component: () => import('@/views/jsTest/index'),
        meta: { title: 'jsTest', icon: 'example' }
      }
    ]
  },
  {
    path: '/showMap',
    component: Layout,
    meta: {
      title: 'showMap',
      icon: 'nested'
    },
    children: [
      {
        path: 'index',
        name: 'showMap',
        component: () => import('@/views/showMap/index'),
        meta: { title: 'showMap', icon: 'example' }
      }
    ]
  },
  {
    path: '/showEcharts',
    component: Layout,
    meta: {
      title: 'showEcharts',
      icon: 'nested'
    },
    children: [
      {
        path: 'index',
        name: 'showEcharts',
        component: () => import('@/views/showEcharts/index'),
        meta: { title: 'showEcharts', icon: 'example' }
      }
    ]
  },
  {
    path: '/simulationServer',
    component: Layout,
    meta: {
      title: 'simulationServer',
      icon: 'nested'
    },
    children: [
      {
        path: 'index',
        name: 'simulationServer',
        component: () => import('@/views/simulationServer/index'),
        meta: { title: 'simulationServer', icon: 'example' }
      }
    ]
  },
  {
    path: '/threeMapShow',
    component: Layout,
    meta: {
      title: 'threeMapShow',
      icon: 'nested'
    },
    children: [
      {
        path: 'index',
        name: 'threeMapShow',
        component: () => import('@/views/threeMapShow/index'),
        meta: { title: 'threeMapShow', icon: 'example' }
      }
    ]
  },
  {
    path: '/showCssStyle',
    component: Layout,
    meta: {
      title: 'showCssStyle',
      icon: 'nested'
    },
    children: [
      {
        path: 'index',
        name: 'showCssStyle',
        component: () => import('@/views/showCssStyle/index'),
        meta: { title: 'showCssStyle', icon: 'example' }
      }
    ]
  },
  {
    path: '/sidebar',
    component: Layout,
    meta: {
      title: 'sidebar',
      icon: 'nested'
    },
    children: [
      {
        path: 'index',
        name: 'sidebar',
        component: () => import('@/views/sidebar/index'),
        meta: { title: 'sidebar', icon: 'example' }
      }
    ]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
