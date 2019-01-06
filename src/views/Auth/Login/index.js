import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from './Login';
import * as AuthAction from '../../../actions/auth';

const mapStateToProps = state => ({
  authState: state.authState
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
