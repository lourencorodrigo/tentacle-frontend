import { SERVICE_WORKER_UPDATED } from '../../actions/serviceWorker';

const initialState = {
  updated: false
};

const serviceWorker = (state = initialState, action) => {
  switch (action.type) {
    case SERVICE_WORKER_UPDATED:
      return {
        ...state,
        updated: true
      };
    default:
      return state;
  }
};

export default serviceWorker;
