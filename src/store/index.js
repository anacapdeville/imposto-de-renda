import { createStore, combineReducers, compose } from 'redux';
import reducer from '../reducer';

const rootReducer = combineReducers({reducer})

const composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : (...args) => {
      if (args.length === 0) return undefined;
      if (typeof args[0] === 'object') return compose;
      return compose(...args);
    }
);

const store = createStore(rootReducer, composeWithDevTools());

export default store;