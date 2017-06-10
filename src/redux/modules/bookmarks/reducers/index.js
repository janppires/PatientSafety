import { GET_BOOKMARKS } from '../actions';

const initialState = [];

export default function bookmarks (state = initialState, action) {
  switch (action.type) {
    case GET_BOOKMARKS:
      return state;
    default:
      return state
  }
}
