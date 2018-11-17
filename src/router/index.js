import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Update from '@/components/Update'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    }
  ]
})
