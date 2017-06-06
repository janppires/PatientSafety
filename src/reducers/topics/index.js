import { combineReducers } from 'redux';
import { FETCH_TOPICS_PENDING, FETCH_TOPICS_FULFILLED, FETCH_TOPICS_REJECTED } from '../../actions';

import list, * as fromList from './list';
import byId, * as fromById from './byId';


function isLoading (state = false, action) {
  switch (action.type) {
    case FETCH_TOPICS_PENDING:
      return true;
    case FETCH_TOPICS_FULFILLED:
    case FETCH_TOPICS_REJECTED:
      return false;
    default:
      return state
  }
}

export function hasError (state = false, action) {
  switch (action.type) {
    case FETCH_TOPICS_PENDING:
      return false;
    case FETCH_TOPICS_REJECTED:
      return true;
    default:
      return state
  }
}

const topics = combineReducers({
  byId,
  list,
  isLoading,
  hasError
})

export default topics;

export const getTopics = (state) => {
    const { list, byId } = state.topics;
    return list.map((id) => byId[id]);
}

export const getTopic = (state, id) => {
  const { byId } = state.topics;
  return byId[id];
}

export const getLoading = (state) => state.topics.isLoading