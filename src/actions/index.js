import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from '../constants';

export const booksLoaded = (newBooks) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: newBooks,
  }
}

export const booksRequested = () => {
  return {
    type: FETCH_BOOKS_REQUEST,
  }
}

export const booksError = (error) => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error,
  }
}

export const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested())
  bookstoreService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((error) => dispatch(booksError(error)))
}