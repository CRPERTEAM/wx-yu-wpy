import wepy from 'wepy'
// import util from './util'
// import md5 from './md5'

// const API_SECRET_KEY = 'www.mall.cycle.com'
// const TIMESTAMP = util.getCurrentTime()
// const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())
const baseUrl = 'http://jsonplaceholder.typicode.com/post'

export default async (url = '', data = {}, method = 'GET') => {
  console.log(`method: ${method}`)
  if (['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'].indexOf(method.toUpperCase()) === -1) {
    return new Error('method is error.(方法不能为空)')
  }

  wepy.showToast({
    title: '加载中',
    icon: 'loading'
  })

  let res = await wepy.request({
    url: baseUrl + url,
    method: method.toUpperCase() || 'GET',
    data: data,
    header: { 'Content-Type': 'application/json' }
  })

  wepy.hideToast()

  return res
}
