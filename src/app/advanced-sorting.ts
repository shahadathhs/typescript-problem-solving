/*
 * Advanced Sorting
 * Problem: =>
    Create an array of objects representing students with 'name' and 'grades' properties. 
    Write a function to sort the students by average grade in descending order.
*/

import { TStudent } from 'types/student'

export const getStudentsByAverageGradeDesc = (students: TStudent[]) => {
  // * steps
  // use the sort method to sort
  // inside sort callback function
  // calculate sum of grades of each student using reduce method
  // in reduce method , accumulator is 0 (based on initial value) and num is each grade,
  // and at the end of reduce method, accumulator hold the sum of all grades and is being returned
  // calculate average grade of each student by dividing sum of grades by length of grades array
  // return average grade of student b - average grade of student a (b-a is for descending order)

  // * sort by average grade desc
  const shadowStudents: TStudent[] = [...students] // * so that original array is not modified
  const sortedStudents: TStudent[] = shadowStudents?.sort((a: TStudent, b: TStudent) => {
    const avgA: number =
      a?.grades?.reduce((acc: number, num: number) => acc + num, 0) / a?.grades?.length
    const avgB: number =
      b?.grades?.reduce((acc: number, num: number) => acc + num, 0) / b?.grades?.length
    return avgB - avgA
  })

  // * print
  console.info('Given students: ', students, '\n')
  console.info('Sorted students by average grade desc: ', sortedStudents, '\n')

  // * return
  return sortedStudents
}
