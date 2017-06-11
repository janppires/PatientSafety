import flatMap from 'lodash/flatMap';
import includes from 'lodash/includes';

export const getTopics = (state) => {
    const { list, byId } = state.topics;
    return list.map((id) => byId[id]);
}

export const getTopic = (state, id) => {
  const { byId } = state.topics;
  return byId[id];
}

export const getLoading = (state) => state.topics.isLoading;

export const getPoints = (state, ids) => {
  const { byId } = state.topics;
  return flatMap(byId, (topic, key) => {
    const points = topic.points.filter((point) => includes(ids, point.id));
    return points.map((point) => {
      return {
        topicId: key,
        ...point
      }
    })
  })
}