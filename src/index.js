import 'babel-polyfill';

import './tags/app.tag';
import './tags/with-mixin.tag';

import store from './state';

import riotReduxMixin from 'riot-redux-mixin';

/* start */

document.addEventListener('DOMContentLoaded', () => {
  riot.mixin('redux', riotReduxMixin(store));
  riot.mount('app', {store});

  console.log(1);
  store.dispatch({type: 'INCREASE_COUNTER'});
  console.log(2);
  store.dispatch({type: 'INCREASE_COUNTER'});
});


