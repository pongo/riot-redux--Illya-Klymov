import counter from './counter-reducer';

export {counter};
export function issues(state = [], action) {
  switch (action.type) {
    case 'LOAD_ISSUED':
      return action.payload;
    default:
      return state;
  }
}
