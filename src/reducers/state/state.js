import {
  FAILURE_STATE,
  REQUEST_STATE,
  SUCCESS_STATE
} from '../../actions/state';

const initialState = {
  data: [],
  loading: false,
  error: false,
  errorData: {}
};

const state = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STATE:
      return Object.assign({}, state, { loading: true });
    case SUCCESS_STATE:
      return Object.assign({}, state, {
        data: action.data.list,
        loading: false,
        error: false
      });
    case FAILURE_STATE:
      return Object.assign({}, state, {
        loading: false,
        error: true,
        errorData: action.data.error
      });
    default:
      return state;
  }
};

export default state;
