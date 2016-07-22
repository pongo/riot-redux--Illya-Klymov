export default function (state, action) {
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return state + 1;
    case 'RESET_COUNTER':
      return 0;
    default:
      return state;
  }
}
