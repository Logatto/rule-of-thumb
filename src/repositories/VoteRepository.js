import Client from "./Clients/FetchClient";

const baseApi = process.env.VUE_APP_BASEAPI;

export default {
  getAll() {
    return Client(`${baseApi}/list`);
  },
  postVote(payload) {
    return Client(`${baseApi}/vote`, payload, "POST");
  },
};
