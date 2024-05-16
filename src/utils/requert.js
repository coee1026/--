import axios from 'axios'
import { Toast } from 'vant'
const instance = axios.create({
  baseURL: 'http://smart-shop.itheima.net/index.php?s=/api',
  timeout: 1000,
  // headers: { 'X-Custom-Header': 'foobar' }
  headers: { platform: 'h5' }
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  })

  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  // console.log(response.data.status)
  // 如果响应状态码不是200 弹出提示并抛出异常 且下面的代码都不执行
  if (response.data.status !== 200) {
    Toast.fail('验证码错误')
    // console.log(response.data.message)
    return Promise.reject(response.data.message)
  } else {
    Toast.clear()
  }

  return response
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
