/*
 * Object Manipulation
 * Problem: =>
    Create an array of objects representing books with properties like title, author, and year. 
    Write a function that takes the array and returns a new array with only the book titles. 
    Print the result.
*/

import { TBook } from 'types/book'

export const getBookTitles = (books: TBook[]) => {
  // * get book titles
  const bookTitles: string[] = books?.map((book: TBook) => book?.title)

  // * print
  console.info('Given books: ', books, '\n')
  console.info('Book titles: ', bookTitles, '\n')

  // * return
  return bookTitles
}
