import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from "@/views/Money.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/money',
    component: Money
  },
]

const router = new VueRouter({
  routes
})

export default router
