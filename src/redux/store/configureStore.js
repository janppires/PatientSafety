import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';
import rootReducer from '../modules';

const middlewares = [promiseMiddleware()];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middlewares.push(logger);
}

export default function configureStore(initialState) {
    initialState = initialState || {};
    return createStore(rootReducer, initialState, composeWithDevTools(
        applyMiddleware(...middlewares),
        // other store enhancers if any
    ));
}