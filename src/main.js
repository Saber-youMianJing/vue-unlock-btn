import Vue from 'vue'
import router from './router.js'
import VueResource from "vue-resource"
import App from './App'
import store from './vuex/store.js'
Vue.use(VueResource);

const vm = new Vue({
  el: '#app',
  template: '<App>',
  components: {App},
  router,
  store
})
