const ajax = require('../ajax/index')
// 首页 推荐
const getAllRec = (query) => {
  return ajax({
    url: '/v5/index/tab/allRec',
    data: query || {}
  }).then(res => {
    return res.data
  })
}

// 首页 发现
const getDiscovery = (query) => {
  return ajax({
    url: '/v7/index/tab/discovery',
    data: query || {}
  }).then(res => {
    return res.data
  })
}

// 首页 日报
const getFeed = (query) => {
  return ajax({
    url: '/v5/index/tab/feed',
    data: query || {}
  }).then(res => {
    return res.data
  })
}

// 首页 漫游
const getRoamingCalendar = (query) => {
  return ajax({
    url: '/v7/roamingCalendar/index',
    data: query || {}
  }).then(res => {
    return res.data
  })
}

// 首页 搜索
const getSearch = (query) => {
  return ajax({
    url: '/v3/search',
    data: query || {}
  }).then(res => {
    return res.data
  })
}

// 首页 搜索热词
const getSearchHot = (query) => {
  return ajax({
    url: '/v3/queries/hot',
    data: query || {}
  }).then(res => {
    return res.data
  })
}

module.exports = {
  getAllRec,
  getDiscovery,
  getFeed,
  getRoamingCalendar,
  getSearch,
  getSearchHot
}