const querystring = require('querystring')
const handleHomeRouter = require('./src/router/home/index')
const serverHandle = (req, res) => {
  
  // 设置返回格式
  res.setHeader('Content-Type','application/json')

  const url = req.url
  req.path = url.split('?')[0]
  req.query = querystring.parse(url.split('?')[1])

  // 处理首页的请求
  if (url.indexOf('/api/home/') > -1) {
    handleHomeRouter(req, res)
  }
}

module.exports = serverHandle