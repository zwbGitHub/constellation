import { axiosGet } from '../libs/http'
const requestData = (name, date) => {
  return axiosGet({
    url: '/api/constellation/getAll',
    data: {
      consName: name,
      type: date
    }
  })
}

export { requestData }
