import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './redux/reducers';
import promisesMiddleware from './redux/middlewares/promises-middleware';

const reducer = combineReducers(reducers);
let createStoreWithMiddleware = applyMiddleware(promisesMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer, {
  issues: [],
  repository: '',
  counter: 0,
});

export default store;