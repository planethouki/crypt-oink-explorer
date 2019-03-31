import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Tons from './views/Tons.vue';
import Shop from './views/Shop.vue';
import Breed from './views/Breed.vue';
import Ton from './views/Ton.vue';
import Tree from './views/Tree.vue';
import Ranking from './views/Ranking.vue';
import Ownership from './views/Ownership.vue';

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
      path: '/breed',
      redirect: '/breed/card/1',
    },
    {
      path: '/breed/:type/:page',
      name: 'breed',
      component: Breed,
      props: route => ({ page: Number(route.params.page), type: route.params.type }),
    },
    {
      path: '/shop',
      redirect: '/shop/card/1',
    },
    {
      path: '/shop/:type/:page',
      name: 'shop',
      component: Shop,
      props: route => ({ page: Number(route.params.page), type: route.params.type }),
    },
    {
      path: '/ton',
      redirect: '/ton/0',
    },
    {
      path: '/ton/:tokenId',
      name: 'ton',
      component: Ton,
      props: route => ({ tokenId: Number(route.params.tokenId) }),
    },
    {
      path: '/familytree',
      redirect: '/familytree/0',
    },
    {
      path: '/familytree/:tokenId',
      name: 'tree',
      component: Tree,
      props: route => ({ tokenId: Number(route.params.tokenId) }),
    },
    {
      path: '/ranking',
      redirect: '/ranking/1',
    },
    {
      path: '/ranking/:page',
      name: 'ranking',
      component: Ranking,
      props: route => ({ page: Number(route.params.page) }),
    },
    {
      path: '/ownership',
      redirect: '/ownership/0xa2156f24711a631e92e65dc114cf172065ddd49b/card/1',
    },
    {
      path: '/ownership/:address/:type/:page',
      name: 'ownership',
      component: Ownership,
      props: route => ({
        page: Number(route.params.page), type: route.params.type, address: route.params.address
      }),
    },
  ],
});
