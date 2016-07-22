import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './redux/reducers';
import promisesMiddleware from './redux/middlewares/promises-middleware';
import createLogger from 'redux-logger';

const reducer = combineReducers(reducers);

// со времен выхода видео redux-logger изменился. теперь сперва создать логгер через createLogger()
const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  promisesMiddleware,
  logger
)(createStore);

const store = createStoreWithMiddleware(reducer, {
  issues: [],
  repository: '',
  counter: 0,
});

export default store;