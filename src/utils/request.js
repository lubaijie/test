import axios from 'axios'
// import store from '@/store'
// import { getToken } from '@/utils/auth'
// import qs from 'qs'

// create an axios instance
const service = axios.create({
  baseURL: 'http://39.108.113.190:8080', // url = base url + request url
  timeout: 5000, // request timeout

  // transformRequest: [function(data) {
  //   data = qs.stringify(data)
  //   return data
  // }]
})

// request interceptor
service.interceptors.request.use(
  config => {

    config.headers['token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjU3MjM4NTQxMjY2Nzc2MDY2IiwiaWF0IjoxNTg4Njg4MDA2LCJleHAiOjE1ODkyOTI4MDZ9.q0fgPMCf3Huj8CS1sejJ4pFvWxt8xWhScVPU3YjIcmmj5QuWsbE35_xlPjyEsqwn56lBUEmhQlWYDwtPNVI2TQ'
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

export default service
