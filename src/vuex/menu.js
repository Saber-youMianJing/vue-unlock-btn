export default {
  state: {
    logoDisplay: false
  },
  mutations: {
  	hidelogo: state => state.logoDisplay = true,
    showlogo: state => state.logoDisplay = false
  },
  actions: {},
  getters: {}
}
