export const REQUEST_STATE_CITIES = 'REQUEST_STATE_CITIES';
export const SUCCESS_STATE_CITIES = 'SUCCESS_STATE_CITIES';
export const FAILURE_STATE_CITIES = 'FAILURE_STATE_CITIES';

export const getCities = idState => ({
  type: REQUEST_STATE_CITIES,
  idState
});
