import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookList from '../components/BookList';
import { fetchBooks } from '../actions/books';
import * as fromBooks from '../reducers/books';

class GenrePage extends Component {
  componentDidMount() {
    const { dispatch, bookList } = this.props;
    if (!bookList.length) {
      dispatch(fetchBooks());
    }
  }
  render() {
    const { bookList } = this.props;
    return (
      <div>
        <h1>{bookList.length ? bookList[0].genre : null}</h1>
        <BookList bookList={bookList} />
      </div>
    );
  }
}

const mapStateToProps = ({ books }, { params }) => {
  return {
    bookList: fromBooks.getByGenre(books, params.genre)
  };
};

export default connect(mapStateToProps)(GenrePage);

