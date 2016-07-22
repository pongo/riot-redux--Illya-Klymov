export default function (state, action) {
  switch (action.type) {
    case 'LOAD_ISSUED':
      return action.payload;
    default:
      return state;
  }
}
