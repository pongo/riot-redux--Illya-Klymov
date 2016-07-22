import { createStore, combineReducers } from 'redux';
import counterReducer from './redux/reducers/counter-reducer';
import issuesReducer from './redux/reducers/issues-reducer';

const reducer = combineReducers({
  counter: counterReducer,
  issues: issuesReducer
});

const store = createStore(reducer, {
  issues: [],
  repository: '',
  counter: 0,
});

export default store;