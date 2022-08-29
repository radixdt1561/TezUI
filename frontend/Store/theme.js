export const state = () => ({
    theme: '',
  })
  
  // mutations
  export const mutations = {
    SET_THEME(state, theme) {
      state.theme = theme
    },
  }
  
  // actions
  export const actions = {
    setTheme({ commit }, theme) {
      commit('SET_THEME', theme)
    },
  }
  