import { language as reducer } from './';
import { updateLanguage } from '../../actions/language';

const initialState = { selected: 'pt' };

describe('language reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle UPDATE_LANGUAGE', () => {
    const language = 'pt';
    expect(reducer([], updateLanguage(language))).toEqual({
      selected: language
    });
  });
});
