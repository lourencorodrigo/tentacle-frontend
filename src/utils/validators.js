export const required = value =>
  value ? undefined : { id: 'VALIDATIONS_REQUIRED' };

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? { id: 'VALIDATIONS_INVALID_EMAIL_ADDRESS' }
    : undefined;

export const minLength = min => value =>
  value && value.length < min
    ? { id: 'VALIDATIONS_MUST_BE_AT_LEAST', values: { min } }
    : undefined;

export const maxLength = max => value =>
  value && value.length > max
    ? { id: 'VALIDATIONS_MUST_BE_OR_LESS', values: { max } }
    : undefined;
