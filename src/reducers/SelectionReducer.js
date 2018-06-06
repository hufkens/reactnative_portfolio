import * as types from './../actions/types';

export default function selectedId(state = null, action) {
  switch (action.type) {
    case types.SELECT_LIBRARY_ACTION:
      return action.payload;
    default:
      return state;
  }
}
