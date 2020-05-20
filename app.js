const handleHomeRouter = require('./src/router/home/index')
const serverHandle = (req, res) => {
  
  // 设置返回格式
  res.setHeader('Content-Type','application/json')

  const homeData = handleHomeRouter(req, res)
  res.end(JSON.stringify(homeData))
}

module.exports = serverHandle