import { requestData } from './request'
export default async store => {
  let consName = store.state.consName
  let type = store.state.routerName
  const data = await requestData(consName, type)
  console.log(1)
  if (data.data.error_code) {
    store.commit('setErrorCode', data.data.error_code)
  } else {
    store.commit('setAllData', data.data)
    store.commit('setErrorCode', 0)
  }
}
