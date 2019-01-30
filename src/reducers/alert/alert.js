import { ALERT_SHOW, ALERT_CLOSE } from '../../actions/alert';

const initialState = {
  show: false,
  title: '',
  color: 'danger'
};

const alert = (state = initialState, action) => {
  switch (action.type) {
    case ALERT_SHOW:
      return {
        ...state,
        show: true,
        title: action.title,
        color: action.color
      };
    case ALERT_CLOSE:
      return {
        ...state,
        show: false
      };
    default:
      return state;
  }
};

export default alert;
