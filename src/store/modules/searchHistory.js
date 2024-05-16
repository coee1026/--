import { getHistory, setHistory, removeHistory } from '@/utils/storage'
export default {
  namespaced: true,
  state: {
    History: getHistory()
  },
  getters: {
  },
  mutations: {
    saveHistory (state, list) {
      state.History = list
      setHistory(state.History)
    },
    clear () {
      removeHistory()
    }
  },
  actions: {
  }
}
