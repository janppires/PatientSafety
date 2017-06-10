import { combineReducers } from 'redux';
import { FETCH_TOPICS_PENDING, FETCH_TOPICS_FULFILLED, FETCH_TOPICS_REJECTED } from '../actions';

import list from './list';
import byId from './byId';

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