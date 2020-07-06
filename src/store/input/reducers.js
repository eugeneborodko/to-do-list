import { RESET_INPUT_VALUE, SET_INPUT_VALUE } from './actions';

const initialState = {
  value: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_INPUT_VALUE:
      return {
        ...state,
        value: action.payload,
      }

    case SET_INPUT_VALUE:
      return {
        ...state,
        value: action.payload,
      }

    default:
      return state;
  }
};