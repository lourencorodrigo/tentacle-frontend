export const ALERT_SHOW = '@tentacle/alert/ALERT_SHOW';
export const ALERT_CLOSE = '@tentacle/alert/ALERT_CLOSE';

export const showAlert = (title, color) => ({
  type: ALERT_SHOW,
  title,
  color
});

export const closeAlert = () => ({
  type: ALERT_CLOSE
});
