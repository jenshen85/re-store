import { BOOKS_LOADED } from '../constants';

export const booksLoaded = (newBooks) => {
  return {
    type: BOOKS_LOADED,
    payload: newBooks,
  }
}