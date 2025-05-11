/*
  * Unique Values
  * Problem: => 
    Create an array of numbers with some duplicate values. 
    Write a function to filter out the duplicate values and return a new array with only unique numbers. 
    Print the result.
*/

export const getUniqueValues = (numbers: number[]) => {
  // * get unique values
  const uniqueValues: number[] = [...new Set(numbers)]

  // * print
  console.info('Given numbers: ', numbers, '\n')
  console.info('Unique values: ', uniqueValues, '\n')

  // * return
  return uniqueValues
}

// * without set
export const getUniqueValues2 = (numbers: number[]) => {
  // * get unique values in three steps
  // take an empty array
  // map over numbers array
  // if number is not in uniqueValues array, push number to uniqueValues array
  const uniqueValues: number[] = []
  numbers?.forEach((num: number) => {
    if (!uniqueValues?.includes(num)) {
      uniqueValues?.push(num)
    }
  })

  // * print
  console.info('Given numbers: ', numbers, '\n')
  console.info('Unique values: ', uniqueValues, '\n')

  // * return
  return uniqueValues
}
