import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index/index'
import Index0 from '@/components/index/index0'
import Index1 from '@/components/index/index1'
import Index2 from '@/components/index/index2'
import Index3 from '@/components/index/index3'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
      {
        name: 'index0',
        path: '',
        component: Index0
      },
      {

        name: 'index1',
        path: 'index1',
        component: Index1
      },
      {
        name: 'index2',
        path: 'index2',
        component: Index2
      },
      {
        name: 'index3',
        path: 'index3',
        component: Index3
      }
    ]},
  ]
})
