import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAuthors } from '../actions/authors';
import { Link } from 'react-router';

class AuthorListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAuthors());
  }
  renderList() {
    const { authorList } = this.props;

    return (
      <ul className="list-group">
        {authorList.map((author, i) => {
          const { books } = author;
          return (
            <li key={i} className="list-group-item">
              <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" id={`author${i}`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                  <span className="list-group-item-heading">{author.name}</span>
                  <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby={`author${i}`}>
                  <li><Link to={`/authors/${author._id}`}>{author.name}</Link></li>
                  <li role="separator" className="divider"></li>
                  {books.map((book, i) =>
                    <li key={i}><Link to={`/books/${book._id}`}>{book.name}</Link></li>
                  )}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <h1>Authors</h1>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { authorList } = state.authors;

  return {
    authorList
  }
};

export default connect(mapStateToProps)(AuthorListPage);

