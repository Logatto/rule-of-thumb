import Client from "./Clients/FetchClient";

export default {
  getAll() {
    return Client(
      "https://5skfmpwqsc.execute-api.us-west-1.amazonaws.com/rule-of-thumb/list"
    );
  },
  postVote(payload) {
    return Client(
      "https://5skfmpwqsc.execute-api.us-west-1.amazonaws.com/rule-of-thumb/vote",
      payload,
      "POST"
    );
  },
};
