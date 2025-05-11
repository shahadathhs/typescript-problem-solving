import { filterFemalesAndMapNames } from 'app/array-filtering-and-mapping'
import { composeFunctions } from 'app/function-composition'
import { getBookTitles } from 'app/object-manipulation'
import { sortCarsByYearAsc, sortCarsByYearDesc } from 'app/sorting-objects'
import { books } from 'data/book'
import { cars } from 'data/car'
import { people } from 'data/person'

// * Problem 1
console.info('Problem 1: \n')
console.info('Array Filtering and Mapping')
filterFemalesAndMapNames(people)

// * Problem 2
console.info('\nProblem 2: \n')
console.info('Object Manipulation')
getBookTitles(books)

// * Problem 3
console.info('\nProblem 3: \n')
console.info('Function Composition')
const result = composeFunctions(2)
console.info(result)

// * Problem 4
console.info('\nProblem 4: \n')
console.info('Sorting Objects')
sortCarsByYearAsc(cars)
sortCarsByYearDesc(cars)
