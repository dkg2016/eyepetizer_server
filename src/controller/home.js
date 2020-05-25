const ajax = require('../ajax/index')
const getList = (query) => {
  console.log(query)
  return ajax({
    url: '/v5/index/tab/allRec',
    data: {
      "page": 0,
      "isOldUser": true,
      "udid": "3c51c24ae6344c318c39d4b9f8c93d9aa78920ce",
      "vc": "591",
      "vn": "6.2.1",
      "size": "1080X1920",
      "deviceModel": "MI 4LTE",
      "first_channel": "eyepetizer_yingyongbao_market",
      "last_channel": "eyepetizer_yingyongbao_market",
      "system_version_code": "23"
    }
  }).then(res => {
    return res.data
  })
}

module.exports = {
  getList
}