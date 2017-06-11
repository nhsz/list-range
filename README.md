# list-range

[![Build Status](https://travis-ci.org/nhsz/list-range.svg?branch=master)](https://travis-ci.org/nhsz/list-range)
[![Coverage Status](https://coveralls.io/repos/github/nhsz/list-range/badge.svg?branch=master)](https://coveralls.io/github/nhsz/list-range?branch=master)
[![Codebeat badge](https://codebeat.co/badges/90d7c473-974f-45d6-b62c-3415e6da8b0d)](https://codebeat.co/projects/github-com-nhsz-list-range-master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/330539c9950446358587769371f0cdd9)](https://www.codacy.com/app/nquiroz/list-range?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=nhsz/list-range&amp;utm_campaign=Badge_Grade)
[![Code Climate](https://codeclimate.com/github/nhsz/list-range/badges/gpa.svg)](https://codeclimate.com/github/nhsz/list-range)

> Return an array of values within range, determined by `range(start, stop[, step])`  
ES6 implementation of **[`Python built-in range()`](https://docs.python.org/3.6/library/stdtypes.html#range)** function

## Rules

- `start` and `step` are optional
- If the `step` argument is omitted, it defaults to 1
- If the `start` argument is omitted, it defaults to 0
- All the arguments must be integers
- `step` can not be 0

## Install

```
$ npm install list-range
```

## Usage

```js
const range = require('list-range')

console.log(range(10))
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(range(10, 10))
// []
console.log(range(3, 17, -2))
// []
console.log(range(1, 11))
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(0, 30, 5))
// [0, 5, 10, 15, 20, 25]
console.log(range(0, 10, 3))
// [0, 3, 6, 9]
console.log(range(10, -10, -1))
// [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
console.log(range(0))
// []
console.log(range(1, 0))
// []
console.log(range(21, -1, -2))
// [21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1]
console.log(range(-1, -5, 1))
// []
console.log(range(-1, -5))
// []
console.log(range(-1, -5, -1))
// [-1, -2, -3, -4]
console.log(range(1.2, 5.76))
// Error: All the arguments must be integers
console.log(range(1, 10, 0))
// Error: Step value can not be 0
```

## License

MIT © **[`Nicolás Quiroz`](https://nicolasquiroz.com)**
