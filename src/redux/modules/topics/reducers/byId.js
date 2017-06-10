import { FETCH_TOPICS_PENDING, FETCH_TOPICS_FULFILLED } from '../actions';

export default function byId (state = {}, action) {
  switch (action.type) {
    case FETCH_TOPICS_PENDING:
      return {};
    case FETCH_TOPICS_FULFILLED:
      return action.payload.entities.topics;
    default:
      return state
  }
}