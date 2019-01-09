import { auth, REQUEST_AUTHENTICATE } from './index';

describe('auth actions', () => {
  it('should create auth action', () => {
    const email = 'test@example.com';
    const password = '12345';
    const expectedAction = {
      type: REQUEST_AUTHENTICATE,
      email,
      password
    };
    expect(auth(email, password)).toEqual(expectedAction);
  });
});
