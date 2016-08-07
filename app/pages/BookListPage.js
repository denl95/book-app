import React, { Component } from 'react';
import { fetchBooks } from '../actions/books';
import { connect } from 'react-redux';
import BookList from '../components/BookList';

class BookListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchBooks());
  }

  render() {
    const { bookList } = this.props;
    return (
      <div>
        <h1>Books</h1>
        <BookList bookList={bookList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { bookList } = state.books;

  return {
    bookList
  }
};

export default connect(mapStateToProps)(BookListPage);

