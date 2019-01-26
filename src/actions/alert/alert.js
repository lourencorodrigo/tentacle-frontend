export const ALERT_SHOW = '@tentacle/alert/ALERT_SHOW';

export const showAlert = (title, id) => ({
  type: ALERT_SHOW,
  title,
  id
});
