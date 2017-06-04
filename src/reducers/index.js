import { combineReducers } from 'redux';
import topics from './topics';
import tabs from './tabs';

const rootReducer = combineReducers({
    topics,
    tabs
})

export default rootReducer;