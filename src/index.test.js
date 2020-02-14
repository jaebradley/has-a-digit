import hasADigit from '.';

describe('hasADigit', () => {
  const expectResult = ({ value, result }) => expect(hasADigit(value)).toEqual(result);

  describe('false', () => {
    const expectFalse = (value) => expectResult({ value, result: false });

    it('false for Infinity', () => {
      expectFalse(Infinity);
    });

    it('false for -Infinity', () => {
      expectFalse(-Infinity);
    });

    it('false for NaN', () => {
      expectFalse(NaN);
    });

    it('false for string without numbers', () => {
      expectFalse('abc');
    });

    it('false for empty string', () => {
      expectFalse('');
    });

    it('false for empty String object', () => {
      expectFalse(String(''));
    });

    it('false for String object without numbers', () => {
      expectFalse(String('abc'));
    });
  });

  describe('true', () => {
    const expectTrue = (value) => expectResult({ value, result: true });

    it('true for negative integer', () => {
      expectTrue(-1);
    });

    it('true for stringified negative integer', () => {
      expectTrue('-1');
    });

    it('true for negative decimal', () => {
      expectTrue(-1.23);
    });

    it('true for stringified negative decimal', () => {
      expectTrue('-1.23');
    });

    it('true for positive integer', () => {
      expectTrue(1);
    });

    it('true for stringified positive integer', () => {
      expectTrue('1');
    });

    it('true for positive decimal', () => {
      expectTrue(1.23);
    });

    it('true for stringified positive decimal', () => {
      expectTrue('1.23');
    });

    it('true for string with letters and numbers', () => {
      expectTrue('abc123');
    });
  });
});
