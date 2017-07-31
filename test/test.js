import test from 'ava'
import range from '../lib'

test(t => {
  t.deepEqual(range(10, 10), [])
  t.deepEqual(range(3, 17, -2), [])
  t.deepEqual(range(-1, -5), [])
  t.deepEqual(range(-1, -5, 1), [])
  t.deepEqual(range(1, 0), [])
  t.deepEqual(range(0), [])
})

test(t => {
  t.deepEqual(range(10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  t.deepEqual(range(4), [0, 1, 2, 3])
  t.deepEqual(range(1, 5), [1, 2, 3, 4])
  t.deepEqual(range(0, 20, 5), [0, 5, 10, 15])
  t.deepEqual(range(0, -4, -1), [0, -1, -2, -3])
  t.deepEqual(range(1, 11), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  t.deepEqual(range(0, 30, 5), [0, 5, 10, 15, 20, 25])
  t.deepEqual(range(0, 10, 3), [0, 3, 6, 9])
  t.deepEqual(range(10, -10, -1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9])
  t.deepEqual(range(21, -1, -2), [21, 19, 17, 15, 13, 11, 9, 7, 5, 3, 1])
  t.deepEqual(range(-1, -5, -1), [-1, -2, -3, -4])
})

test(t => {
  const error = t.throws(() => {
    range(1.2, 5.76)
  }, Error)

  t.is(error.message, 'All the arguments must be integers')
})

test(t => {
  const error = t.throws(() => {
    range(1, 10, 0)
  }, Error)

  t.is(error.message, 'Step value can not be 0')
})
