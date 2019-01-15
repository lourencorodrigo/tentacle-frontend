import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import { language } from './language';
import { theme } from './theme';
import { auth } from './auth';
import { state } from './state';
import { city } from './city';

export default combineReducers({
  form: reduxFormReducer,
  languageState: language,
  themeState: theme,
  authState: auth,
  stateState: state,
  cityState: city
});
