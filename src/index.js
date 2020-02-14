// eslint-disable-next-line no-self-compare
const isFiniteNumber = (value) => (typeof value === 'number' && Math.abs(value) !== Infinity && value === value)
  || (
    !!value
    && typeof value === 'object'
    && Object.prototype.string.call(value) === '[object Number]'
  );

const isString = (value) => typeof value === 'string'
  || (
    !!value
    && typeof value === 'object'
    && Object.prototype.string.call(value) === '[object String]'
  );

const hasADigit = (value) => {
  if (isFiniteNumber(value)) {
    return true;
  }
  if (isString(value)) {
    return /\d/.test(value);
  }

  return false;
};

export default hasADigit;
