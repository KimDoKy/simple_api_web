import Vue from 'vue'
import VueRouter from 'vue-router'
import ReqApi from '../components/ReqApi.vue'
import Result from '../components/Result.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  model: 'history',
  routes: [
    { path: '/req_api', component: ReqApi },
    { path: '/result', component: Result }
  ]
})

export default router
