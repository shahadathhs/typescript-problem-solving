/* 
 * Array Filtering and Mapping
 * Problem: =>
    Create an array of objects, each representing a person with properties like name, age, and gender. 
    Write a function to filter out all females and then map the remaining people to an array of names. 
    Print the final result.
*/

interface Person {
  name: string
  age: number
  gender: string
}

const people: Person[] = [
  { name: 'John', age: 30, gender: 'male' },
  { name: 'Jane', age: 25, gender: 'female' },
  { name: 'Bob', age: 40, gender: 'male' },
  { name: 'Alice', age: 35, gender: 'female' },
]

export const filterFemalesAndMapNames = () => {
  const females : Person[] = people?.filter((person: Person) => person?.gender === 'female')
  const names: string[] = females?.map((person: Person) => person?.name)
  console.info("Names of females: ", names, "\n")
}
