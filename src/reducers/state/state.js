import {
  STATE_FAILURE,
  STATE_REQUEST,
  STATE_SUCCESS,
  STATE_REQUEST_CITIES,
  STATE_SUCCESS_CITIES,
  STATE_FAILURE_CITIES
} from '../../actions/state';

const initialState = {
  payload: [],
  loading: false,
  error: false,
  errorData: {}
};

const initialStateCity = {
  payload: [],
  loading: false,
  error: false,
  errorData: {}
};

export const state = (state = initialState, action) => {
  switch (action.type) {
    case STATE_REQUEST:
      return Object.assign({}, state, { loading: true });
    case STATE_SUCCESS:
      return Object.assign({}, state, {
        payload: action.data.list,
        loading: false,
        error: false
      });
    case STATE_SUCCESS_CITIES:
      return Object.assign({}, state, {
        cities: action.data.cities,
        loading: false,
        error: false
      });
    case STATE_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: true,
        errorData: action.data.error
      });
    default:
      return state;
  }
};

export const city = (state = initialStateCity, action) => {
  switch (action.type) {
    case STATE_REQUEST_CITIES:
      return Object.assign({}, state, { loading: true });
    case STATE_SUCCESS_CITIES:
      return Object.assign({}, state, {
        payload: action.data.cities,
        loading: false,
        error: false
      });
    case STATE_FAILURE_CITIES:
      return Object.assign({}, state, {
        loading: false,
        error: true,
        errorData: action.data.error
      });
    default:
      return state;
  }
};
