import { FETCH_TOPICS_PENDING, FETCH_TOPICS_FULFILLED } from '../../actions';

export default function topicsReducer (state = [], action) {
  switch (action.type) {
    case FETCH_TOPICS_PENDING:
      return [];
    case FETCH_TOPICS_FULFILLED:
      return action.payload.result;
    default:
      return state
  }
}