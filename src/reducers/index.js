import { BOOKS_LOADED } from '../constants';

const initialState = {
  books: [],
}

const reduser = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_LOADED:
      return {
        books: action.payload,
      }
    default:
      return state
  }
}

export default reduser;