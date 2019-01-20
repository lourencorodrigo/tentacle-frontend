import { THEME_UPDATE } from '../../actions/theme';

const initialState = { theme: 'dark' };

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case THEME_UPDATE:
      return Object.assign({}, state, {
        theme: action.theme
      });
    default:
      return state;
  }
};

export default themeReducer;
