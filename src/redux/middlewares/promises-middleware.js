const middleware = store => next => action => {
  if (action.type !== 'PROMISE') {
    return next(action);
  }

  const [startAction, successAction, failureAction] = action.actions;
  store.dispatch({type: startAction});

  // а здесь указать скобочки после promise:
  // action.promise().then(
  action.promise.then(
    (data) => store.dispatch({type: successAction, data}),
    (error) => store.dispatch({type: failureAction, error})
  );
};

export default middleware;