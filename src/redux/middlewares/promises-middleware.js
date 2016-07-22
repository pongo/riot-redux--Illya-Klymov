const middleware = store => next => action => {
  if (action.then) {
    console.log('Promise!');
  }
  return next(action);
};

export default middleware;