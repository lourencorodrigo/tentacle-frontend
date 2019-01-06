import {
  FAILURE_AUTHENTICATE,
  REQUEST_AUTHENTICATE,
  SUCCESS_AUTHENTICATE
} from '../../actions/auth';

const initialState = {
  data: {},
  loading: false,
  error: false,
  errorData: {}
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_AUTHENTICATE:
      return Object.assign({}, state, { loading: true });
    case SUCCESS_AUTHENTICATE:
      return Object.assign({}, state, {
        data: action.data,
        loading: false,
        error: false
      });
    case FAILURE_AUTHENTICATE:
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
