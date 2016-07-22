import 'babel-polyfill';

import './tags/app.tag';

import store from './state';
import fetch from 'isomorphic-fetch';

/* start */

document.addEventListener('DOMContentLoaded', () => {
  riot.mount('app');

  store.subscribe(() => console.log('New state', store.getState()));

  console.log(1);
  store.dispatch({type: 'INCREASE_COUNTER'});
  console.log(2);
  store.dispatch({type: 'INCREASE_COUNTER'});
  console.log(3);
  store.dispatch({type: 'RESET_COUNTER'});
  console.log(4);
  store.dispatch({type: 'UNKNOWN'});
  console.log(5);
  store.dispatch({
    type: 'LOAD_ISSUED',
    payload: [
      {id: 1, name: 'First issue'},
      {id: 2, name: 'Second issue'},
    ]
  });
});

fetch('https://api.github.com/repos/Yomguithereal/baobab/issues')
  .then((r) => r.json())
  .then(::console.log)
;
