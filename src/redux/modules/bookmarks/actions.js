export const GET_BOOKMARKS = 'GET_BOOKMARKS';
export const ADD_BOOKMARK = 'ADD_BOOKMARK';

export function getBookmarks() {
  return {
    type: GET_BOOKMARKS
  }
}

export function addBookmark(point) {
  return {
    type: ADD_BOOKMARK,
    payload: point.id
  }
}