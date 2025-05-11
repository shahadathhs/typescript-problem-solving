/* 
 * Array Filtering and Mapping
 * Problem: =>
    Create an array of objects, each representing a person with properties like name, age, and gender. 
    Write a function to filter out all females and then map the remaining people to an array of names. 
    Print the final result.
*/

import { TPerson } from 'types/person'

export const filterFemalesAndMapNames = (people: TPerson[]) => {
  const females: TPerson[] = people?.filter((person: TPerson) => person?.gender === 'female')
  const names: string[] = females?.map((person: TPerson) => person?.name)
  console.info('Names of females: ', names, '\n')
}
