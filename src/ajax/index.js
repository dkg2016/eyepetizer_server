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
      config.params = params
    } else {
      config.data = params
    }

    axios(config).then(res => {
      resolve(res)
    }).catch(err => {
      alert(err)
    })
  })
}

module.exports = ajax