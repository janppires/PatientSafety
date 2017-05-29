import { normalize, schema } from 'normalizr';
import topics from './topics.json';

const topic = new schema.Entity('topics');
const topicsSchema = [ topic ];

export function getTopics() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve(topics)
    }, 500)
  })
  .then(normalizeTopics)
}

function normalizeTopics(data) {
    return normalize(data, topicsSchema);
}