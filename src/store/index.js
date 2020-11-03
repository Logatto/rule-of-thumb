import Vue from "vue";
import Vuex from "vuex";

import Repository from "@/repositories/RepositoryFactory";
const VoteRepository = Repository.get("votes");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    votes: [],
  },
  mutations: {
    loadVotes: (state, resp) => {
      state.votes = resp;
    },
    updateVote: (state, voteObject) => {
      state.votes = state.votes.map((item) => {
        if (item.id === voteObject.id) {
          return voteObject;
        }
        return item;
      });
    },
  },
  actions: {
    async getAllVotes({ commit }) {
      commit("loadVotes", await VoteRepository.getAll());
    },
    async sendVote({ commit }, payload) {
      commit("updateVote", await VoteRepository.postVote(payload));
    },
  },
  modules: {},
});
