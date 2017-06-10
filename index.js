'use strict'

function range (start = 0, stop = arguments[0], step = 1) {
  let args = [...arguments]
  checkForValidArguments(args)
  start = checkForOnlyOneArgument(args)

  if (isNonValidRange(start, stop, step)) {
    return []
  }

  if (start < stop) {
    return generateAscendingRange(start, stop, step)
  }

  return generateDescendingRange(start, stop, step)
}

function checkForValidArguments (args) {
  if (args[3] === 0) {
    throw new Error('Step value can not be 0')
  }

  if (args.every(value => !Number.isInteger(value))) {
    throw new Error('All the arguments must be integers')
  }
}

function checkForOnlyOneArgument (args) {
  return args.length === 1 ? 0 : args[0]
}

function isNonValidRange (start, stop, step) {
  return start === stop || start < stop && step < 0 || start > stop && step > 0
}

function generateAscendingRange (start, stop, step) {
  let result = []
  for (start; start < stop; start += step) {
    result.push(start)
  }

  return result
}

function generateDescendingRange (start, stop, step) {
  let result = []
  for (start; start > stop; start += step) {
    result.push(start)
  }

  return result
}
