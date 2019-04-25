import React from 'react';
import { BookstoreConsumer } from '../bookstore-service-context';

const withBookstoreService = () => (Wrapped) => (props) => {
  return (
    <BookstoreConsumer>
      {
        (bookstoreService) => <Wrapped {...props} bookstoreService={ bookstoreService } />
      }
    </BookstoreConsumer>
  )
}

export default withBookstoreService;