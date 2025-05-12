/* 
 * Array Filtering and Mapping
 * Problem: =>
    Create an array of objects, each representing a person with properties like name, age, and gender. 
    Write a function to filter out all females and then map the remaining people to an array of names. 
    Print the final result.
*/

import { TPerson } from 'types/person'

export const filterFemalesAndMapNames = (people: TPerson[]) => {
  // * remove females
  const females: TPerson[] = people?.filter((person: TPerson) => person?.gender !== 'female')
  // * get names
  const names: string[] = females?.map((person: TPerson) => person?.name)

  // * print
  console.info('Given people: ', people, '\n')
  console.info('Names of males: ', names, '\n')

  // * return
  return names
}
