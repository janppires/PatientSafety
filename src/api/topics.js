import { normalize, schema } from 'normalizr';

const topic = new schema.Entity('topics');
const topicsSchema = [ topic ]

const topics = [
  { id: 1, name: 'Fluids', articles: [{name: 'Fluid And Electrolytes'}, {name: 'Hypercalcaemia'}, {name: 'Hyperkaleamia'}, {name: 'Hypoglycaemia'}] },
  { id: 2, name: 'Drugs', articles: [{name: 'Common Drug Doses'}, {name: 'Drug Safety'}] },
  { id: 3, name: 'Presenting', articles: [] },
  { id: 4, name: 'Investigations', articles: [] },
  { id: 5, name: 'Referrals', articles: [] },
  { id: 6, name: 'Guidelines', articles: [] },
  { id: 7, name: 'Procedures', articles: [] }
]

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