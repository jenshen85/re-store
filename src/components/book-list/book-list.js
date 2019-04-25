import React, { Component } from 'react';
import { connect } from 'react-redux';
import './book-list.css';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import withBookstoreService from '../hoc';
import { fetchBooks } from '../../actions';
import { compose } from '../../utils';

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props

    if(error) {
      return <ErrorIndicator />
    }

    if(loading) {
      return <Spinner />
    }

    return <BookList books={ books } />
  }
}

const BookList = ({ books }) => {
  const items = books.map((book) => {
    return (
      <li key={book.id}>
        <BookListItem book={ book } />
      </li>
    )
  })
  return (
  <ul className='book-list'>
    { items }
  </ul>
  )
}

const mapStateToProps = ({ books, loading, error }) => {
  return {
    books,
    loading,
    error
  }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
  const { bookstoreService } = ownProps
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);