# list-range

```js
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
