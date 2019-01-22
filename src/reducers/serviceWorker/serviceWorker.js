import { UPDATE_SERVICE_WORKER } from '../../actions/serviceWorker';

const initialState = {
  isUpdate: false
};

const serviceWorker = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SERVICE_WORKER:
      return { ...state, isUpdate: action.isUpdate };
    default:
      return state;
  }
};

export default serviceWorker;
