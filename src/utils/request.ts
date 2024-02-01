import useUserStore from '@/stores/user'
import axios from 'axios'

const request = axios.create({
  baseURL: '',
  timeout: 1000 * 60
})

// 请求拦截器
request.interceptors.request.use((config) => {
  const token = useUserStore().token
  if (token) config.headers['Authorization'] = token
  return config
})

// 响应拦截器
request.interceptors.response.use((res) => {
  const code: number = res.data.code
  if (code === 200) {
    return res.data
  }
})

export default request
