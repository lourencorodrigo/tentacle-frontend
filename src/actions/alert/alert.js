export const ALERT_SHOW = '@tentacle/alert/ALERT_SHOW';

export const showAlert = (title, color, id) => ({
  type: ALERT_SHOW,
  title,
  color,
  id
});
