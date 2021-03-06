import MinRequest from './MinRequest'

const minRequest = new MinRequest()

// 请求拦截器
minRequest.interceptors.request((request) => {
  return request
})

// 响应拦截器
minRequest.interceptors.response((response) => {
  return response.data
})

// 设置默认配置
minRequest.setConfig((config) => {
  config.baseURL = 'http://10.137.200.95'
  return config
})

export default {
  apis: {
    uniGet (data) {
      return minRequest.get(data)
    },
	uniPost (url,data) {
	  return minRequest.post(url,data)
	}
  }
}