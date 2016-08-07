import React from 'react';
import App from './pages/App';
import BookListPage from './pages/BookListPage';
import AuthorListPage from './pages/AuthorListPage';
import AuthorDetailsPage from './pages/AuthorDetailsPage';
import BookDetailsPage from './pages/BookDetailsPage';
import GenrePage from './pages/GenrePage';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={BookListPage} />
    <Route path="/authors" component={AuthorListPage} />
    <Route path="/authors/:id" component={AuthorDetailsPage} />
    <Route path="/books/:id" component={BookDetailsPage} />
    <Route path="/genre/:genre" component={GenrePage} />
  </Route>
);
