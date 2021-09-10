import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import TopPage from '../views/topPage/TopPage.vue';
import CompanyPage from '../views/companyPage/CompanyPage.vue';
import LoginPage from '../views/loginPage/LoginPage.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'TopPage',
    component: TopPage,
  },
  {
    path: '/company',
    name: 'CompanyPage',
    component: CompanyPage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
