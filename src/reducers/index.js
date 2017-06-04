import { combineReducers } from 'redux';
import topics from './topics';
import tabs from './tabs';
import bookmarks from './bookmarks';

const rootReducer = combineReducers({
    topics,
    tabs,
    bookmarks
})

export default rootReducer;