import '@babel/polyfill';
import Vue from 'vue';
import './plugins/axios';
import './plugins/bootstrap-vue';
import './plugins/web3';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.prototype.$tonImg = function (tokenId) {
  return `https://s3-ap-northeast-1.amazonaws.com/crypton-live/thumbnails/${tokenId}_512x586.png`;
};

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
