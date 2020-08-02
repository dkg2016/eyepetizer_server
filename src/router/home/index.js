const {getAllRec} = require('../../controller/home')
const {SuccessModel} = require('../../model/baseModel')
const handleHomeRouter = (req, res) => {
  const method = req.method
  const path = req.url.split('?')[0]
  const query = req.query

  if (method === 'GET') {
    // 首页 推荐
    if (path === '/api/home/allRec') {
      getAllRec(query).then(data => {
        res.end(JSON.stringify(new SuccessModel(data)))
      })
    }

    if (path === '/api/home/discovery') {
      return {
        msg: '获取首页发现'
      }
    }

    if (path === '/api/home/feed') {
      return {
        msg: '获取首页日报'
      }
    }
  }
}

module.exports = handleHomeRouter