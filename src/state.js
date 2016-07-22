function reducer(state, action) {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      state.counter +=1;
      break;
    case 'RESET_COUNTER':
      state.counter = 0;
      break;
    default:
      break;
  }
}