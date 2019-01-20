import { state as reducer } from './';
import { getStates } from '../../actions/state';

const initialState = {
  data: [],
  loading: false,
  error: false,
  errorData: {}
};

describe('staet reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle STATE_REQUEST', () => {
    expect(reducer([], getStates())).toEqual({ loading: true });
  });
});
