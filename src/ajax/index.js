const axios = require('axios')
axios.defaults.baseURL = 'http://baobab.kaiyanapp.com/api'

const ajax = (options) => {
  return new Promise(resolve => {
    let url = options.url
    let method = options.method || 'GET'
    let params = options.data || {}
    let config = {
      url: url,
      mathod: method
    }
    if (method === 'GET') {
      params.randomTime = new Date().getTime()
      params.isOldUser = true
      params.udid = "32a707e0deaa40f2b4b74cd5b25f7a8d78681034"
      params.vc = "591"
      params.vn = "6.3.1"
      params.size = "1080X1920"
      params.deviceModel = "MI 4LTE",
      params.first_channel = "yingyongbao"
      params.last_channel = "yingyongbao"
      params.system_version_code = "2"
      config.params = params
    } else {
      config.data = params
    }

    // console.log(config)

    axios(config).then(res => {
      resolve(res)
    }).catch(err => {
      alert(err)
    })
  })
}

module.exports = ajax