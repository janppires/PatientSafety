export const GET_BOOKMARKS = 'BOOKMARKS/GET';
export const ADD_BOOKMARK = 'BOOKMARKS/ADD';
export const REMOVE_BOOKMARK = 'BOOKMARKS/REMOVE';

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

export function removeBookmark(point) {
  return {
    type: REMOVE_BOOKMARK,
    payload: point.id
  }
}

export function toogleBookmark(point, isBookmarked) {
  if(isBookmarked) {
      return removeBookmark(point);
    } else {
      return addBookmark(point);
    }
}