import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Register from './Register';
import * as StateAction from '../../../actions/state';

const mapStateToProps = state => ({
  stateState: state.stateState,
  cityState: state.cityState
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(StateAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
