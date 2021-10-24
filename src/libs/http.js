import axios from 'axios'
import QueryString from 'qs'
import { JUHE_KEY } from '../config/keys'

function axiosPost(options) {
  axios({
    url: options.url,
    method: 'post',
    header: {
      'Content-Type': 'application/x-www-from-urlencoded'
    },
    data: QueryString.stringify({
      ...options.data,
      key: JUHE_KEY
    })
  })
}
function axiosGet(options) {
  return axios({
    url: options.url,
    method: 'get',
    header: {
      'Content-Type': 'application/x-www-from-urlencoded'
    },
    params: {
      ...options.data,
      key: JUHE_KEY
    }
  })
}
export { axiosPost, axiosGet }
