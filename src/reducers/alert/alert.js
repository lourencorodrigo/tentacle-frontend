import { ALERT_SHOW } from '../../actions/alert';

const initialState = {
  show: false,
  title: '',
  color: '',
  id: ''
};

const alert = (state = initialState, action) => {
  switch (action.type) {
    case ALERT_SHOW:
      return {
        ...state,
        show: true,
        title: action.title,
        id: action.id,
        color: action.color
      };
    default:
      return state;
  }
};

export default alert;
