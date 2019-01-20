import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Register from './Register';
import * as StateAction from '../../../actions/state';
import * as UserAction from '../../../actions/user';

const mapStateToProps = state => ({
  stateState: state.stateState,
  cityState: state.cityState,
  userState: state.userState
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(Object.assign({}, StateAction, UserAction), dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
