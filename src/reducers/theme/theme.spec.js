import { theme as reducer } from './';
import { updateTheme } from '../../actions/theme';

const initialState = { theme: 'dark' };

describe('staet reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle STATE_REQUEST', () => {
    const theme = 'light';
    expect(reducer([], updateTheme(theme))).toEqual({
      theme
    });
  });
});
