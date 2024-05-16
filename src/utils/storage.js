// 约定一个通用的键名
const INFO = 'hm_shopping_info'

// 获取键值
export const getInfo = () => {
  return JSON.parse(localStorage.getItem(INFO)) || { token: '', userID: '' }
}

// 存储键值
export const setInfo = obj => {
  localStorage.setItem(INFO, JSON.stringify(obj))
}

// 移除键值
export const removeInfo = () => {
  localStorage.removeItem(INFO)
}

//
const HISTORY = 'hm_search_list'
// 获取本地搜索记录
export const getHistory = () => {
  // console.log(111)
  return JSON.parse(localStorage.getItem(HISTORY)) || [{ id: 1, content: '手机' }, { id: 2, content: '衣服' }, { id: 3, content: '电脑' }]
}
// 存储本地搜索记录
export const setHistory = (list) => {
  localStorage.setItem(HISTORY, JSON.stringify(list))
}
// 移除
export const removeHistory = () => {
  localStorage.removeItem(HISTORY)
}
