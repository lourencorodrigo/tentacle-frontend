import ThemeProvider from './ThemeProvider';

import { connect } from 'react-redux';

const mapStateProps = store => ({
  theme: store.themeState.theme
});

export default connect(mapStateProps)(ThemeProvider);
