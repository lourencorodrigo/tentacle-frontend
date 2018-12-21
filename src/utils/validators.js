export const required = value =>
  value ? undefined : { id: 'validations.required' };

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? { id: 'validations.invalid_email_address' }
    : undefined;

export const minLength = min => value =>
  value && value.length < min
    ? { id: 'validations.must_be_at_least', values: { min } }
    : undefined;

export const maxLength = max => value =>
  value && value.length > max
    ? { id: 'validations.must_be_ar_leass', values: { max } }
    : undefined;
