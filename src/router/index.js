import Vue from 'vue'
import VueRouter from 'vue-router'
import ReqApi from '../components/ReqApi.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  model: 'history',
  routes: [
    { path: '/req_api', component: ReqApi },
  ]
})

export default router
