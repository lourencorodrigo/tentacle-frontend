import { updateLanguage, LANGUAGE_UPDATE } from './index';

describe('language actions', () => {
  it('should create updateLanguage action', () => {
    const language = 'test';
    const expectedAction = {
      type: LANGUAGE_UPDATE,
      language
    };
    expect(updateLanguage(language)).toEqual(expectedAction);
  });
});
