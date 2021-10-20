import { requestData } from "./request"
export default  async (consName,type)=>{
 const data = await requestData(consName,type)
    console.log(data)
}