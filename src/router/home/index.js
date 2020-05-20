const handleHomeRouter = (req, res) => {
  const method = req.method
  const url = req.url
  const path = url.split('?')[0]

  if (method === 'GET') {
    if (path === '/api/home/recommend') {
      return {
        msg: '获取首页推荐'
      }
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