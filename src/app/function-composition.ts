/*
  * Function Composition
  * Problem: =>
    Write three functions: one to square a number, one to double a number, and one to add 5 to a number. 
    Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
*/

export const squareANumber = (num: number) => num * num
export const doubleNumber = (num: number) => num * 2
export const addFive = (num: number) => num + 5

export const composeFunctions = (num: number) => {
  // * square -> double -> add
  const square = squareANumber(num)
  const double = doubleNumber(square)
  const add = addFive(double)

  // * print
  console.info('Given number: ', num, '\n')
  console.info('Result: ', add, '\n')

  // * return
  return add
}

export const composeFunctions2 = (num: number) => addFive(doubleNumber(squareANumber(num)))
