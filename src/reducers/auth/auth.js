import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from '../../actions/auth';

const initialState = {
  payload: {},
  isLoading: false,
  isError: false,
  errors: {}
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return { ...state, isLoading: true };
    case AUTH_SUCCESS:
      return {
        ...state,
        payload: action.data,
        isLoading: false,
        isError: false
      };
    case AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errors: action.data.error
      };
    default:
      return state;
  }
};

export default auth;
