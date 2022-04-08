import variables from "@/assets/styles/variables.scss";

const state = {
  theme: {
    orange: variables.orange,
    themeBgColor1: variables.lightBgColor1,
    themeBgColor2: variables.lightBgColor2,
    themeTextColor1: variables.lightTextColor1,
    themeTextColor2: variables.lightTextColor2,
    themeBoxShadow: variables.lightBoxShadow,
  },

  // themeBgColor1: variables.lightBgColor1,
  // themeBgColor2: variables.lightBgColor2,
  // themeTextColor1: variables.lightTextColor1,
  // themeTextColor2: variables.lightTextColor2,
  // themeBoxShadow: variables.lightBoxShadow,
};

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      state[key] = value;
    }
  },
};

const actions = {
  changeSetting({ commit }, data) {
    commit("CHANGE_SETTING", data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
