import 'babel-polyfill';

import './tags/app.tag';
import './tags/with-mixin.tag';

import store from './state';
import { getIssues } from './api';

import riotReduxMixin from 'riot-redux-mixin';

/* start */

document.addEventListener('DOMContentLoaded', () => {
  riot.mixin('redux', riotReduxMixin(store));
  riot.mount('app', {store});

  store.subscribe(() => console.log('New state', store.getState()));

  console.log(1);
  store.dispatch({type: 'INCREASE_COUNTER'});
  console.log(2);
  store.dispatch({type: 'INCREASE_COUNTER'});
  console.log(3);
  // store.dispatch({type: 'RESET_COUNTER'});
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
  store.dispatch({
    type: 'PROMISE',
    actions: ['ISSUES_LOADING', 'ISSUES_LOADED', 'ISSUES_LOAD_FAILURE'],
    promise: getIssues()  // т.к. здесь указано getIssues() со скобочками, то
                          // эта функция запускается сразу же.
                          // чтобы запускалась только при запросе нужно удалить скобочки ()
  });
});


