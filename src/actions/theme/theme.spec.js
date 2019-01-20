import { updateTheme, THEME_UPDATE } from './index';

describe('language actions', () => {
  it('should create updateLanguage action', () => {
    const theme = 'dark';
    const expectedAction = {
      type: THEME_UPDATE,
      theme
    };
    expect(updateTheme(theme)).toEqual(expectedAction);
  });
});
