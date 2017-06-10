import { combineReducers } from 'redux';
import topics from './topics/reducers';
import bookmarks from './bookmarks/reducers';

const rootReducer = combineReducers({
    topics,
    bookmarks
})

export default rootReducer;