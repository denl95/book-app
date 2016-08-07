import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchBook } from '../actions/books';
import { slugify } from '../helpers';

class BookDetailsPage extends Component {
  componentDidMount() {
    const { dispatch, bookId } = this.props;
    dispatch(fetchBook(bookId));
  }
  render() {
    const { activeBook } = this.props;
    if (activeBook) {
      const {author} = activeBook;
      return (
        <div>
          <h3>{activeBook.name}</h3>
          <h3>Author: <Link to={`/authors/${author._id}`}>{author.name}</Link></h3>
          <h3>Genre: <Link to={`/genre/${slugify(activeBook.genre)}`}>{activeBook.genre}</Link></h3>
          <p>{activeBook.summary}</p>
        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = (state, { params }) => {
  const { activeBook } = state.books;
  return {
    activeBook,
    bookId: params.id
  }
};

export default connect(mapStateToProps)(BookDetailsPage)
