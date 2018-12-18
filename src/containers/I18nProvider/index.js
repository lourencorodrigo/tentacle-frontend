import { connect } from 'react-redux';

import { I18nProvider } from './I18nProvider';

const mapStateProps = store => ({
  language: store.languageState.selected
});

export default connect(mapStateProps)(I18nProvider);
