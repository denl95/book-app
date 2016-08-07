import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAuthor } from '../actions/authors';
import { Link } from 'react-router';

class AuthorDetailsPage extends Component {
  componentDidMount() {
    const { dispatch, authorId } = this.props;
    dispatch(fetchAuthor(authorId));
  }
  render() {
    const { activeAuthor } = this.props;

    if (activeAuthor) {
      const { books } = activeAuthor;
      return (
        <div>
          <h3>{activeAuthor.name}</h3>
          <p>{activeAuthor.biography}</p>
          <h3>Bibliography</h3>
          <ul>
            {books.map((book, i) =>
              <li key={i}><Link to={`/books/${book._id}`}>{book.name}</Link></li>
            )}
          </ul>
        </div>
      );
    }

    return null;
  }
}

const mapStateToProps = (state, { params }) => {
  const { activeAuthor } = state.authors;
  return {
    activeAuthor,
    authorId: params.id
  }
};

export default connect(mapStateToProps)(AuthorDetailsPage)
