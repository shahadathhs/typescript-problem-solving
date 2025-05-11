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


// * without sort method
export const sortCarsByYearAsc2 = (cars: TCar[]) => {
  const shadowCars = [...cars]

  // * steps
  // loop over cars array
  // loop over cars array again inside the previous loop, starting from one index ahead
  // now compare year of car a (from first loop) with year of car b (from second loop, also starting from one index ahead)
  // if year of car a is greater than year of car b, swap them
  for (let i = 0; i < shadowCars.length; i++) {
    for (let j = i + 1; j < shadowCars.length; j++) {
      if (shadowCars[i].year > shadowCars[j].year) {
        const temp = shadowCars[i]
        shadowCars[i] = shadowCars[j]
        shadowCars[j] = temp
      }
    }
  }

  console.info('Given cars: ', cars, '\n')
  console.info('Sorted cars by year asc: ', shadowCars, '\n')

  return shadowCars
}