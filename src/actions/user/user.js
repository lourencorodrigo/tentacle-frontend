export const USER_REQUEST = '@tentacle/user/USER_REQUEST';
export const USER_SUCCESS = '@tentacle/user/USER_SUCCESS';
export const USER_FAILURE = '@tentacle/user/USER_FAILURE';

export const createUser = user => ({
  type: USER_REQUEST,
  user
});
