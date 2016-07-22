import 'babel-polyfill';

import './tags/app.tag';

/* start */

document.addEventListener('DOMContentLoaded', () => {
  riot.mount('app');
});
