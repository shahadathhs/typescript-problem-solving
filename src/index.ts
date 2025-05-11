import { filterFemalesAndMapNames } from 'app/array-filtering-and-mapping'
import { sumOfEvenNumbers } from 'app/array-reduction'
import { composeFunctions } from 'app/function-composition'
import { getBookTitles } from 'app/object-manipulation'
import { sortCarsByYearAsc } from 'app/sorting-objects'
import { books } from 'data/book'
import { cars } from 'data/car'
import { numbers } from 'data/number'
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
composeFunctions(2)

// * Problem 4
console.info('\nProblem 4: \n')
console.info('Sorting Objects')
sortCarsByYearAsc(cars)


// * Problem 5
console.info('\nProblem 5: \n')
console.info('Array Reduction')
sumOfEvenNumbers(numbers)