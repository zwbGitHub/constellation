export default {
  setConsName(state, value) {
    state.consName = value
  },
  setAllData(state,value){
      state[state.routerName] = value
  },
  setRouterName(state,value){
      state.routerName = value
  }
}
