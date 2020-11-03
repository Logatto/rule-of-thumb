import VoteRepository from "./VoteRepository";

const respositories = {
  votes: VoteRepository,
};

export default {
  get: (name) => respositories[name],
};
