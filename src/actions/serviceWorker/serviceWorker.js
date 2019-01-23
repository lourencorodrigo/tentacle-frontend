export const UPDATE_SERVICE_WORKER =
  '@tentacle/serviceWorker/UPDATE_SERVICE_WORKER';

export const updateRefresh = isUpdate => {
  return {
    type: UPDATE_SERVICE_WORKER,
    isUpdate
  };
};
