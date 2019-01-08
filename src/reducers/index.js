import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import { language } from './language';
import { theme } from './theme';
import { auth } from './auth';
import { state } from './state';

const reducers = combineReducers({
  form: reduxFormReducer,
  languageState: language,
  themeState: theme,
  authState: auth,
  stateState: state
});

export default reducers;
