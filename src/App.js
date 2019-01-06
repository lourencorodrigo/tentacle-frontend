import React from 'react';

import ThemeProvider from './containers/ThemeProvider';
import I18nProvider from './containers/I18nProvider';
import Router from './Router';

const App = () => (
  <ThemeProvider>
    <I18nProvider>
      <Router />
    </I18nProvider>
  </ThemeProvider>
);

export default App;
