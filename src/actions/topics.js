import { getTopics } from '../api/topics';
import { FETCH_TOPICS } from './index';


export function fetchTopics() {
  return {
    type: FETCH_TOPICS,
    payload: getTopics()
  }
}