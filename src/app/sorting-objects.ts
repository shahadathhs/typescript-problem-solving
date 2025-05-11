/*
  * Sorting Objects
  * Problem: =>
    Create an array of objects representing cars with properties like make, model, and year. 
    Write a function to sort the array of cars by the year of manufacture in ascending order. 
    Print the sorted array.
*/

import { TCar } from 'types/car'

export const sortCarsByYearAsc = (cars: TCar[]) => {
  const sortedCars: TCar[] = cars?.sort((a: TCar, b: TCar) => a?.year - b?.year)
  console.info('Sorted cars by year asc: ', sortedCars, '\n')
}

export const sortCarsByYearDesc = (cars: TCar[]) => {
  const sortedCars: TCar[] = cars?.sort((a: TCar, b: TCar) => b?.year - a?.year)
  console.info('Sorted cars by year desc: ', sortedCars, '\n')
}
