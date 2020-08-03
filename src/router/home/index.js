const {
  getAllRec,
  getDiscovery,
  getFeed,
  getRoamingCalendar,
  getSearch,
  getSearchHot
} = require('../../controller/home')
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

    // 首页 发现
    if (path === '/api/home/discovery') {
      getDiscovery(query).then(data => {
        res.end(JSON.stringify(new SuccessModel(data)))
      })
    }

    // 首页 日报
    if (path === '/api/home/feed') {
      getFeed(query).then(data => {
        res.end(JSON.stringify(new SuccessModel(data)))
      })
    }

    // 首页 漫游
    if (path === '/api/home/roamingCalendar') {
      getRoamingCalendar(query).then(data => {
        res.end(JSON.stringify(new SuccessModel(data)))
      })
    }

    // 首页 搜索
    if (path === '/api/home/search') {
      getSearch(query).then(data => {
        res.end(JSON.stringify(new SuccessModel(data)))
      })
    }

    // 首页 搜索热词
    if (path === '/api/home/searchHot') {
      getSearchHot(query).then(data => {
        res.end(JSON.stringify(new SuccessModel(data)))
      })
    }
  }
}

module.exports = handleHomeRouter