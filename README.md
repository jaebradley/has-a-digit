[![Build Status](https://travis-ci.org/jaebradley/has-a-digit.svg?branch=master)](https://travis-ci.org/jaebradley/has-a-digit)

# has-a-digit

Check if an input has a digit.

## Installation

```bash
npm install has-a-digit
```

```bash
yarn install has-a-digit
```

## Usage

```javascript
import hasADigit from 'has-a-digit';

hasADigit(1); // true
hasADigit(1.23); // true
hasADigit(Infinity); // false
hasADigit(NaN); // false
hasADigit({}); // false
hasADigit(true); // false

hasADigit('1'); // true
hasADigit('1.23'); // true
hasADigit('abc123'); // true
```
