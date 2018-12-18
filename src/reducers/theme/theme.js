import { UPDATE_THEME } from '../../actions/theme';

const initialState = { theme: 'dark' };

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return Object.assign({}, state, {
        theme: action.theme
      });
    default:
      return state;
  }
};

export default themeReducer;
