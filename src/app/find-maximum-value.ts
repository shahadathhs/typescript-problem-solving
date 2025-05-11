/*
  * Find Maximum Value:
  * Problem: =>
    Write a function that takes an array of numbers and returns the maximum value
*/

// * without Math.max
export const findMaximumValue = (numbers: number[]) => {
  // * find maximum value in three steps
  // set max to first number in numbers array
  // loop over numbers array
  // if number is greater than max, set max to number

  // * find maximum value
  let max = numbers[0]
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i]
    }
  }

  // * print
  console.info('Given numbers: ', numbers, '\n')
  console.info('Maximum value: ', max, '\n')

  // * return
  return max
}

export const findMaximumValue2 = (numbers: number[]) => Math.max(...numbers)
