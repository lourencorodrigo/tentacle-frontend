import { USER_FAILURE, USER_REQUEST, USER_SUCCESS } from '../../actions/user';

const initialState = {
  payload: {},
  isLoading: false,
  isError: false,
  messagesErrors: []
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return Object.assign({}, state, { isLoading: true });
    case USER_SUCCESS:
      return Object.assign({}, state, {
        payload: action.data,
        isloading: false,
        isError: false
      });
    case USER_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        isError: true,
        errors: action.data.messages
      });
    default:
      return state;
  }
};

export default auth;
