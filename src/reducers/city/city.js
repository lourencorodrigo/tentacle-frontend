import {
  SUCCESS_STATE_CITIES,
  REQUEST_STATE_CITIES,
  FAILURE_STATE_CITIES
} from '../../actions/city';

const initialState = {
  cities: [],
  loading: false,
  error: false,
  errorData: {}
};

const state = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STATE_CITIES:
      return Object.assign({}, state, { loading: true });
    case SUCCESS_STATE_CITIES:
      return Object.assign({}, state, {
        cities: action.data.cities,
        loading: false,
        error: false
      });
    case FAILURE_STATE_CITIES:
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
