import { combineReducers } from 'redux';
import { routerReducer } from './history';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: routerReducer,
    ...injectedReducers,
  });

  return rootReducer;
}
