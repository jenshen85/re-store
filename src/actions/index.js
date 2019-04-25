import {
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  BOOK_ADDED_TO_CART,
  BOOK_REMOVED_FROM_CART,
  ALL_BOOKS_REMOVED_TO_CART,
  } from '../constants';

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

export const bookAddedToCart = (bookId) => {
  return {
    type: BOOK_ADDED_TO_CART,
    payload: bookId,
  }
}

export const bookRemovedFromCart = (bookId) => {
  return {
    type: BOOK_REMOVED_FROM_CART,
    payload: bookId,
  }
}

export const allBookRemovedFromCart = (bookId) => {
  return {
    type: ALL_BOOKS_REMOVED_TO_CART,
    payload: bookId,
  }
}

export const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested())
  bookstoreService
    .getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((error) => dispatch(booksError(error)))
}