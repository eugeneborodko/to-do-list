export const RESET_INPUT_VALUE = 'RESET_INPUT_VALUE';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

export const setInputValue = (value) => {
  return {
    type: SET_INPUT_VALUE,
    payload: value,
  }
};

export const resetInputValue = () => {
  return {
    type: RESET_INPUT_VALUE,
    payload: '',
  }
};