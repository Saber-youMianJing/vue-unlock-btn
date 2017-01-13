export default {
  state: {
    Lat:0,
    Lng:0,
    Map:true,
    Distanceshow:false
  },
  mutations: {
    setLat (state, n) {
      state.Lat = n
    },
    setLng (state, n) {
      state.Lng = n
    },
    setyoxi (state, n) {
      state.yoxi = n
    },
    setMap (state) {
      // 变更状态
      state.Map = false
    },
    setDistanceshow (state){
      state.Distanceshow = true
    },
    setDistanceshowFalse (state){
      state.Distanceshow = false
    }
  },
  actions: {},
  getters: {}
}
