import { updateTheme, UPDATE_THEME } from './index';

describe('language actions', () => {
  it('should create updateLanguage action', () => {
    const theme = 'dark';
    const expectedAction = {
      type: UPDATE_THEME,
      theme
    };
    expect(updateTheme(theme)).toEqual(expectedAction);
  });
});
