import React from 'react';

import ThemeProvider from './containers/ThemeProvider';
import I18nProvider from './containers/I18nProvider';
import Routes from './Routes';

const App = () => (
  <ThemeProvider>
    <I18nProvider>
      <Routes />
    </I18nProvider>
  </ThemeProvider>
);

export default App;
