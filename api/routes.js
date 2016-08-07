const express = require('express');
const router = express.Router();
const Book = require('./models/book');
const Author = require('./models/author');

router.route('/books')
  .get(function(req, res) {
    Book.find()
      .populate('author', 'name')
      .exec()
      .then((books) => res.json(books))
      .catch((err) => res.end(err));
  });

router.route('/books/:book_id')
  .get(function(req, res) {
    Book.findById(req.params.book_id)
      .populate('author', 'name')
      .exec()
      .then((book) => res.json(book))
      .catch((err) => res.end(err));
  });

router.route('/authors')
  .get(function(req, res) {
    Author.find()
      .populate('books', 'name')
      .exec()
      .then((authors) => res.json(authors))
      .catch((err) => res.end(err));
  });

router.route('/authors/:author_id')
  .get(function(req, res) {
    Author.findById(req.params.author_id)
      .populate('books', 'name')
      .exec()
      .then((author) => res.json(author))
      .catch((err) => res.end(err));
  });

module.exports = router;
