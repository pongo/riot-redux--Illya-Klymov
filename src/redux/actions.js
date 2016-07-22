import { getIssues } from '../api';

export function loadIssues() {
  return {
    type: 'PROMISE',
    actions: ['ISSUES_LOADING', 'ISSUES_LOADED', 'ISSUES_LOAD_FAILURE'],
    promise: getIssues()  // т.к. здесь указано getIssues() со скобочками, то
                          // эта функция запускается сразу же.
                          // чтобы запускалась только при запросе нужно удалить скобочки ()
                          //
                          // впрочем, если используем кнопку для загрузки, то и так норм
  };
}