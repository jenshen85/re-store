import React, { Component } from 'react';
import { connect } from 'react-redux';
import './book-list.css';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import withBookstoreService from '../hoc';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import { compose } from '../../utils';

class BookList extends Component {

  componentDidMount() {
    const {
      bookstoreService,
      booksLoaded,
      booksRequested,
      booksError } = this.props
    booksRequested()
    bookstoreService
      .getBooks()
      .then((data) => booksLoaded(data))
      .catch((error) => booksError(error))
  }

  render() {
    const { books, loading, error } = this.props

    if(error) {
      return <ErrorIndicator />
    }

    if(loading) {
      return <Spinner />
    }

    const items = books.map((book) => <li key={book.id}>
                                        <BookListItem book={ book } />
                                      </li>)
    return (
      <ul className='book-list'>
        { items }
      </ul>
    )
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error
  }
}

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError,
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);