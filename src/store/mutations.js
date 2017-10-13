export default {
  INCREMENT: state => state.count++,
  DECREMENT: state => state.count--,
  UPDATABANNERIMGS: (state,data) => {
    state.company[0].serverData = data
  }
}
