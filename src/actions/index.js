import { BOOKS_LOADED, BOOKS_REQUESTED, BOOKS_ERROR } from '../constants';

export const booksLoaded = (newBooks) => {
  return {
    type: BOOKS_LOADED,
    payload: newBooks,
  }
}

export const booksRequested = () => {
  return {
    type: BOOKS_REQUESTED,
  }
}

export const booksError = (error) => {
  return {
    type: BOOKS_ERROR,
    payload: error,
  }
}