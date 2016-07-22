import fetch from 'isomorphic-fetch';

export function getIssues() {
  return fetch('https://api.github.com/repos/Yomguithereal/baobab/issues')
    .then((r) => r.json())
  ;
}