import { createStore, combineReducers } from 'redux';
import * as reducers from './redux/reducers';

const reducer = combineReducers(reducers);

const store = createStore(reducer, {
  issues: [],
  repository: '',
  counter: 0,
});

export default store;