import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';

import pt from 'react-intl/locale-data/pt';
import es from 'react-intl/locale-data/es';
import PropTypes from 'prop-types';

import messagesPt from '../../translations/pt.json';
import messagesEs from '../../translations/en.json';

addLocaleData([...pt, ...es]);

const messages = {
  pt: messagesPt,
  en: messagesEs
};

export const I18nProvider = ({ language, children }) => (
  <IntlProvider locale={language} messages={messages[language]}>
    {children}
  </IntlProvider>
);

I18nProvider.propTypes = {
  language: PropTypes.string,
  children: PropTypes.element.isRequired
};
