import { auth, AUTH_REQUEST } from './index';

describe('auth actions', () => {
  it('should create auth action', () => {
    const email = 'test@example.com';
    const password = '12345';
    const expectedAction = {
      type: AUTH_REQUEST,
      email,
      password
    };
    expect(auth(email, password)).toEqual(expectedAction);
  });
});
