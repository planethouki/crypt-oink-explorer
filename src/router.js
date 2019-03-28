import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Tons from './views/Tons.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/tons',
      redirect: '/tons/card/1',
    },
    {
      path: '/tons/:type/:page',
      name: 'tons',
      component: Tons,
      props: route => ({ page: Number(route.params.page), type: route.params.type }),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
