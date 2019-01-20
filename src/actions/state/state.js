export const REQUEST_STATE = 'REQUEST_STATE';
export const SUCCESS_STATE = 'SUCCESS_STATE';
export const FAILURE_STATE = 'FAILURE_STATE';

export const REQUEST_STATE_CITIES = 'REQUEST_STATE_CITIES';
export const SUCCESS_STATE_CITIES = 'SUCCESS_STATE_CITIES';
export const FAILURE_STATE_CITIES = 'FAILURE_STATE_CITIES';

export const getStates = () => ({
  type: REQUEST_STATE
});

export const getCities = idState => ({
  type: REQUEST_STATE_CITIES,
  idState
});
