import React from 'react';
import { ToastContainer } from 'react-toastify';

import ThemeProvider from './containers/ThemeProvider';
import I18nProvider from './containers/I18nProvider';
import Router from './Router';

const App = () => (
  <>
    <ThemeProvider>
      <I18nProvider>
        <>
          <ToastContainer draggable autoClose={3000} position="bottom-right" />
          <Router />
        </>
      </I18nProvider>
    </ThemeProvider>
  </>
);

export default App;
