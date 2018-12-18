import { UPDATE_LANGUAGE } from '../../actions/language';

const initialState = { selected: 'pt' };

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LANGUAGE:
      return Object.assign({}, state, {
        selected: action.language
      });
    default:
      return state;
  }
};

export default languageReducer;
