import { FETCH_BREEDS_SUCCESS } from './actionTypes';

const initialState = {
  breeds: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BREEDS_SUCCESS:
      return { ...state, breeds: action.payload };
    default:
      return state;
  }
};

export default reducer;
