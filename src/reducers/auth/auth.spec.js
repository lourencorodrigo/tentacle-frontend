import { auth as reducer } from './';
import { auth, AUTH_SUCCESS, AUTH_FAILURE } from '../../actions/auth';

const initialState = {
  data: {},
  loading: false,
  error: false,
  errorData: {}
};

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle AUTH_REQUEST', () => {
    expect(reducer([], auth('test@example.com', '123456'))).toEqual({
      loading: true
    });
  });

  it('should handle AUTH_SUCCESS', () => {
    expect(
      reducer([], {
        type: AUTH_SUCCESS,
        data: { accessToken: '12345' }
      })
    ).toEqual({
      data: { accessToken: '12345' },
      loading: false,
      error: false
    });
  });

  it('should handle AUTH_FAILURE', () => {
    expect(
      reducer([], {
        type: AUTH_FAILURE,
        data: { error: 'error test' }
      })
    ).toEqual({
      loading: false,
      error: true,
      errorData: 'error test'
    });
  });
});
