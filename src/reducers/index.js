import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import { language } from './language';
import { theme } from './theme';
import { auth } from './auth';

const reducers = combineReducers({
  form: reduxFormReducer,
  languageState: language,
  themeState: theme,
  authState: auth
});

export default reducers;
