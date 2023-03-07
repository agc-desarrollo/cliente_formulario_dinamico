import axios from 'axios'
//import { getToken } from '../utils/auth'

const create = function( url ){
  const service = axios.create({
    baseURL: url, // url = base url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 100000 // request timeout
  })
  
  // request interceptor
  // Seudo Proxy
  service.interceptors.request.use(
  
    config => {
      //const token = getToken();
      //console.log(token)
      //if (token !== null) {
      //  config.headers['x-api-key'] = token
      //}
      return config
    },
    error => {
  
      // do something with request error
      console.log("request err", error) // for debug
      return Promise.reject(error)
    }
  )
  
  // response interceptor
  service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
    */
  
    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
      //loadingInstance.close()
  
      const res = response.data
      //console.log("resdata", res)
  
      // if the custom code is not 20000, it is judged as an error.
      // console.log(res)
      return res
  
    },
    error => {
  
      console.log('err' + error) // for debug
  
      return { stat:false, error:error }
    }
  )
  return service
}

var loadingInstance;
// create an axios instance


export default create
