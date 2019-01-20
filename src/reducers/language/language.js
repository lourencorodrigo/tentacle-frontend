import { LANGUAGE_UPDATE } from '../../actions/language';

const initialState = { selected: 'pt' };

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANGUAGE_UPDATE:
      return Object.assign({}, state, {
        selected: action.language
      });
    default:
      return state;
  }
};

export default languageReducer;
