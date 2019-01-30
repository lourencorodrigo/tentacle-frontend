import React from 'react';
import { ToastContainer } from 'react-toastify';

import ThemeProvider from './containers/ThemeProvider';
import I18nProvider from './containers/I18nProvider';
import Router from './Router';
import AlertContainer from './containers/Alert';
import ServiceWorkerContainer from './containers/ServiceWorker';

const toastConfig = {
  draggable: true,
  autoClose: 3000,
  position: 'bottom-right'
};

const App = () => (
  <>
    <ThemeProvider>
      <I18nProvider>
        <>
          <AlertContainer />
          <ServiceWorkerContainer />
          <ToastContainer {...toastConfig} />
          <Router />
        </>
      </I18nProvider>
    </ThemeProvider>
  </>
);

export default App;
