export default {
  increment ({ commit }) {
    commit('INCREMENT')
  },
  decrement ({ commit }) {
    commit('DECREMENT')
  },
  updataBannerImgs ({ commit },data) {
    commit('UPDATABANNERIMGS',data)
  }

}
