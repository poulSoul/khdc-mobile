import Vue from 'vue'
import Router from 'vue-router'
import {
  dcIndex,
  erpIndex,
  erpOrderAumont
} from './routers.js'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'dc_index',
    component: dcIndex
  }, {
    path: '/dc_index',
    name: 'home',
    component: dcIndex
  }, {
    path: '/erp_index',
    name: 'erp_index',
    component: erpIndex
  }, {
    path: '/erp_amount',
    name: 'erp_amount',
    component: erpOrderAumont
  }]
})
