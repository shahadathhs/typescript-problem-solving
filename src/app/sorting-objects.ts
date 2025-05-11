/*
  * Sorting Objects
  * Problem: =>
    Create an array of objects representing cars with properties like make, model, and year. 
    Write a function to sort the array of cars by the year of manufacture in ascending order. 
    Print the sorted array.
*/

import { TCar } from 'types/car'

export const sortCarsByYearAsc = (cars: TCar[]) => {
  // * sort by year asc
  const shadowCars: TCar[] = [...cars] // * so that original array is not modified
  const sortedCars: TCar[] = shadowCars?.sort((a: TCar, b: TCar) => a?.year - b?.year)

  // * print
  console.info('Given cars: ', cars, '\n')
  console.info('Sorted cars by year asc: ', sortedCars, '\n')

  // * return
  return sortedCars
}

export const sortCarsByYearDesc = (cars: TCar[]) => {
  // * sort by year desc
  const shadowCars: TCar[] = [...cars] // * so that original array is not modified
  const sortedCars: TCar[] = shadowCars?.sort((a: TCar, b: TCar) => b?.year - a?.year)

  // * print
  console.info('Given cars: ', cars, '\n')
  console.info('Sorted cars by year desc: ', sortedCars, '\n')

  // * return
  return sortedCars
}
