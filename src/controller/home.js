const ajax = require('../ajax/index')
const getAllRec = (query) => {
  console.log(query)
  return ajax({
    url: '/v5/index/tab/allRec',
    data: {
      "page": 0
    }
  }).then(res => {
    return res.data
  })
}

module.exports = {
  getAllRec
}