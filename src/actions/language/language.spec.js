import { updateLanguage, UPDATE_LANGUAGE } from './index';

describe('language actions', () => {
  it('should create updateLanguage action', () => {
    const language = 'test';
    const expectedAction = {
      type: UPDATE_LANGUAGE,
      language
    };
    expect(updateLanguage(language)).toEqual(expectedAction);
  });
});
