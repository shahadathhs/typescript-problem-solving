/*
  * Array Reduction
  * Problem: =>
    Create an array of numbers. 
    Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
*/

export const sumOfEvenNumbers = (numbers: number[]) => {
  const sum: number = numbers?.reduce(
    (acc: number, num: number) => acc + (num % 2 === 0 ? num : 0),
    0,
  )

  console.info('Given numbers: ', numbers, '\n')
  console.info('Sum of even numbers: ', sum, '\n')

  return sum
}

export const sumOfEvenNumbers2 = (numbers: number[]) => {
  // * Get even numbers
  const evenNumbers = numbers?.filter((num: number) => num % 2 === 0)
  // * Get sum of even numbers
  const sum: number = evenNumbers?.reduce((acc: number, num: number) => acc + num, 0)

  // * Print
  console.info('Given numbers: ', numbers, '\n')
  console.info('Sum of even numbers: ', sum, '\n')

  // * return
  return sum
}
