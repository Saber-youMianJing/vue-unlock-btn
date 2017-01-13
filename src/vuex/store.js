import Vue from 'vue'
import vuex from 'vuex'
import storedetail from './storedetail'


Vue.use(vuex)

export default new vuex.Store({
  modules: {
    storedetail,
  }
})
