import { getStudentsByAverageGradeDesc } from 'app/advanced-sorting'
import { filterFemalesAndMapNames } from 'app/array-filtering-and-mapping'
import { sumOfEvenNumbers } from 'app/array-reduction'
import { findMaximumValue } from 'app/find-maximum-value'
import { composeFunctions } from 'app/function-composition'
import { checkLeapYear } from 'app/leap-year-checker'
import { getBookTitles } from 'app/object-manipulation'
import { sortCarsByYearAsc } from 'app/sorting-objects'
import { getUniqueValues } from 'app/unique-values'
import { books } from 'data/book'
import { cars } from 'data/car'
import { numbers, numbersWithDuplicates } from 'data/number'
import { people } from 'data/person'
import { students } from 'data/student'

// * Problem 1
console.info('Problem 1: Array Filtering and Mapping \n')
filterFemalesAndMapNames(people)

// * Problem 2
console.info('\nProblem 2: Object Manipulation \n')
getBookTitles(books)

// * Problem 3
console.info('\nProblem 3: Function Composition \n')
composeFunctions(2)

// * Problem 4
console.info('\nProblem 4: Sorting Objects \n')
sortCarsByYearAsc(cars)

// * Problem 5
console.info('\nProblem 5: Array Reduction \n')
sumOfEvenNumbers(numbers)

// * Problem 6
console.info('\nProblem 6: Leap Year Checker \n')
checkLeapYear(2000)

// * Problem 7
console.info('\nProblem 7: Unique Values \n')
getUniqueValues(numbersWithDuplicates)

// * Problem 8
console.info('\nProblem 8: Find Maximum Value \n')
findMaximumValue(numbers)

// * Problem 9
console.info('\nProblem 9: Advanced Sorting \n')
getStudentsByAverageGradeDesc(students)
