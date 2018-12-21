export const REQUEST_AUTHENTICATE = 'REQUEST_AUTHENTICATE';
export const SUCCESS_AUTHENTICATE = 'SUCCESS_AUTHENTICATE';
export const FAILURE_AUTHENTICATE = 'FAILURE_AUTHENTICATE';

export const auth = (email, password) => ({
  type: REQUEST_AUTHENTICATE,
  email,
  password
});
