import { auth as reducer } from './';
import {
  auth,
  SUCCESS_AUTHENTICATE,
  FAILURE_AUTHENTICATE
} from '../../actions/auth';

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

  it('should handle REQUEST_AUTHENTICATE', () => {
    expect(reducer([], auth('test@example.com', '123456'))).toEqual({
      loading: true
    });
  });

  it('should handle SUCCESS_AUTHENTICATE', () => {
    expect(
      reducer([], {
        type: SUCCESS_AUTHENTICATE,
        data: { accessToken: '12345' }
      })
    ).toEqual({
      data: { accessToken: '12345' },
      loading: false,
      error: false
    });
  });

  it('should handle FAILURE_AUTHENTICATE', () => {
    expect(
      reducer([], {
        type: FAILURE_AUTHENTICATE,
        data: { error: 'error test' }
      })
    ).toEqual({
      loading: false,
      error: true,
      errorData: 'error test'
    });
  });
});
