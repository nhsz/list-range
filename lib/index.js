'use strict'

function range (start = 0, stop = arguments[0], step = 1) {
  let args = [...arguments]
  checkForValidArguments(args)
  start = checkForOnlyOneArgument(args)

  if (isInvalidRange(start, stop, step)) {
    return []
  }

  return generateRange(start, stop, step)
}

const checkForValidArguments = args => {
  if (args[2] === 0) {
    throw new Error('Step value can not be 0')
  }

  if (args.every(value => !Number.isInteger(value))) {
    throw new Error('All the arguments must be integers')
  }
}

const checkForOnlyOneArgument = args => {
  return args.length === 1 ? 0 : args[0]
}

const isInvalidRange = (start, stop, step) => {
  return start === stop || start < stop && step < 0 || start > stop && step > 0
}

const generateRange = (start, stop, step) => {
  let result = []
  for (start; (stop - start) * step > 0; start += step) {
    result.push(start)
  }

  return result
}

module.exports = range
