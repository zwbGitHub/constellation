import { axiosGet } from '../libs/http'
const requestData = (name, date) => {
  axiosGet({
    url: '/api/constellation/getAll',
    data: {
      consName: name,
      type: date
    }
  })
}

export { requestData }
