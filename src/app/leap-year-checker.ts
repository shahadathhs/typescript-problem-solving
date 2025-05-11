/*
 * Leap Year Checker
 * Problem: =>
    Write a function that determines whether a given year is a leap year.
*/

/*
  * What is a leap year?
    A leap year is a year that has 366 days instead of 365 days. 
    This is because the year is divisible by 4, but not by 100, except if it is also divisible by 400.
    SO if a year is divisible by 4, but not by 100, it is a leap year.
    Or if a year is divisible by 400, it is a leap year.
*/

export const checkLeapYear = (year: number) => {
  // * check leap year
  const isLeapYear: boolean = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0

  // * print
  console.info('Given year: ', year)
  console.info('Is leap year: ', isLeapYear, '\n')

  // * return
  return isLeapYear
}
