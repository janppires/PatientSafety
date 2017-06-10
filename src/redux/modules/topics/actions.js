import { getTopics } from '../../../api/topics';

export const FETCH_TOPICS = 'FETCH_TOPICS';
export const FETCH_TOPICS_PENDING = 'FETCH_TOPICS_PENDING';
export const FETCH_TOPICS_FULFILLED = 'FETCH_TOPICS_FULFILLED';
export const FETCH_TOPICS_REJECTED = 'FETCH_TOPICS_REJECTED';

export function fetchTopics() {
  return {
    type: FETCH_TOPICS,
    payload: getTopics()
  }
}