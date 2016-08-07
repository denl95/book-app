const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String,
  biography: String,
  books: [{ type: String, ref: 'Book' }]
});

module.exports = mongoose.model('Author', authorSchema);