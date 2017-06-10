export const getTopics = (state) => {
    const { list, byId } = state.topics;
    return list.map((id) => byId[id]);
}

export const getTopic = (state, id) => {
  const { byId } = state.topics;
  return byId[id];
}

export const getLoading = (state) => state.topics.isLoading