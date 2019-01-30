import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ServiceWorker from './ServiceWorker';
import * as AlertAction from '../../actions/alert';

const mapStateToProps = state => ({
  serviceWorkerState: state.serviceWorker
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(AlertAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceWorker);
