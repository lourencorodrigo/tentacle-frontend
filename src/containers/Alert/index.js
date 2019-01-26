import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Alert from './Alert';
import * as AlertAction from '../../actions/alert';

const mapStateToProps = state => ({
  alertState: state.alert
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AlertAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alert);
