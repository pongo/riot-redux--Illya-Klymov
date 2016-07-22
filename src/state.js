import { createStore } from 'redux';
import counterReducer from './redux/reducers/counter-reducer';
import issuesReducer from './redux/reducers/issues-reducer';

function reducer(state, action) {
  return {
    repository: state.repository,
    counter: counterReducer(state.counter, action),
    issues: issuesReducer(state.issues, action)
  }
}

const store = createStore(reducer, {
  issues: [],
  repository: '',
  counter: 0,
});

export default store;