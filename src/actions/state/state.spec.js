import { getStates, REQUEST_STATE } from './index';

describe('language actions', () => {
  it('should create updateLanguage action', () => {
    const expectedAction = {
      type: REQUEST_STATE
    };
    expect(getStates()).toEqual(expectedAction);
  });
});
