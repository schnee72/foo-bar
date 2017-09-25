import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

export const history = createHistory();

const store = createStore(
  rootReducer,
  applyMiddleware(routerMiddleware(history))
);

export default store;
