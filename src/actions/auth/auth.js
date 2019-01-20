export const AUTH_REQUEST = '@tentacle/auth/AUTH_REQUEST';
export const AUTH_SUCCESS = '@tentacle/auth/AUTH_SUCCESS';
export const AUTH_FAILURE = '@tentacle/auth/AUTH_FAILURE';

export const auth = (email, password) => ({
  type: AUTH_REQUEST,
  email,
  password
});
