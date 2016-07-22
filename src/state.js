import { createStore } from 'redux';

function reducer(state, action) {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      /*
      Обе конструкции транспилируются в одинаковый код (пример: < http://bit.ly/2amoiCC >):
      - {...state, ...{counter: (state.counter + 1)}}
      - {...state, counter: (state.counter + 1)}
      */
      return {...state, ...{counter: (state.counter + 1)}};
    case 'RESET_COUNTER':
      return {...state, ...{counter: 0}};
    default:
      return state;
  }
}

const store = createStore(reducer, {
  issues: [],
  repository: '',
  counter: 0,
});

export default store;