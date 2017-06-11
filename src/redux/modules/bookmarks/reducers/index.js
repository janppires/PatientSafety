import { GET_BOOKMARKS, ADD_BOOKMARK, REMOVE_BOOKMARK } from '../actions';

const initialState = [];

export default function bookmarks (state = initialState, action) {
  switch (action.type) {
    case GET_BOOKMARKS:
      return state;
    case ADD_BOOKMARK:
      return [...state, action.payload];
    case REMOVE_BOOKMARK:
      return state.filter(b => b != action.payload)
    default:
      return state
  }
}
