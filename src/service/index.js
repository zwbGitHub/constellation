import { requestData } from './request'
export default async store => {
  let consName = store.state.consName
  let type = store.state.routerName
  const data = await requestData(consName, type)
   console.log(1)
  store.commit('setAllData',data.data)
}
