import { getStates, STATE_REQUEST } from './index';

describe('language actions', () => {
  it('should create updateLanguage action', () => {
    const expectedAction = {
      type: STATE_REQUEST
    };
    expect(getStates()).toEqual(expectedAction);
  });
});
