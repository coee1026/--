import { getInfo, setInfo } from '@/utils/storage'
export default {
  namespaced: true,
  state: {
    userinfo: getInfo()
  },
  getters: {
  },
  mutations: {
    getUserinfo (state, obj) {
      state.userinfo = obj
      setInfo(obj)
    }
  },
  actions: {
  }
}
