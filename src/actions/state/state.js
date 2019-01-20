export const STATE_REQUEST = '@tentacle/state/STATE_REQUEST';
export const STATE_SUCCESS = '@tentacle/state/STATE_SUCCESS';
export const STATE_FAILURE = '@tentacle/state/STATE_FAILURE';

export const STATE_REQUEST_CITIES = '@tentacle/state/STATE_REQUEST_CITIES';
export const STATE_SUCCESS_CITIES = '@tentacle/state/STATE_SUCCESS_CITIES';
export const STATE_FAILURE_CITIES = '@tentacle/state/STATE_FAILURE_CITIES';

export const getStates = () => ({
  type: STATE_REQUEST
});

export const getCities = idState => ({
  type: STATE_REQUEST_CITIES,
  idState
});
