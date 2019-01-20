import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from '../../actions/auth';

const initialState = {
  payload: {},
  loading: false,
  error: false,
  errorData: {}
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return Object.assign({}, state, { loading: true });
    case AUTH_SUCCESS:
      return Object.assign({}, state, {
        payload: action.data,
        loading: false,
        error: false
      });
    case AUTH_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: true,
        errorData: action.data.error
      });
    default:
      return state;
  }
};

export default auth;
