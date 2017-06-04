import { fetchTopics } from './topics';
import { getBookmarks } from './bookmarks';
import { setSelectedTab } from './tabs';

export {
  fetchTopics,
  getBookmarks,
  setSelectedTab
};

export const FETCH_TOPICS = 'FETCH_TOPICS';
export const FETCH_TOPICS_PENDING = 'FETCH_TOPICS_PENDING';
export const FETCH_TOPICS_FULFILLED = 'FETCH_TOPICS_FULFILLED';
export const FETCH_TOPICS_REJECTED = 'FETCH_TOPICS_REJECTED';
export const GET_SELETECT_TAB = 'GET_SELETECT_TAB';
export const SET_SELECTED_TAB = 'SET_SELECTED_TAB';
export const GET_BOOKMARKS = 'GET_BOOKMARKS';
