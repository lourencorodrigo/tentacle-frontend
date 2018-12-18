import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import { language } from './language';
import { theme } from './theme';

const reducers = combineReducers({
  form: reduxFormReducer,
  languageState: language,
  themeState: theme
});

export default reducers;
