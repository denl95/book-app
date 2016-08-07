const books = require('./json/books.json');
const authors = require('./json/authors.json');
const Book = require('./models/book');
const Author = require('./models/author');

const loadDocs = (model, docs) => {
  model.find().then((data) => {
    if (!data.length) {
      return model.create(docs);
    }

    return Promise.resolve({});
  }).then((data) => {
    if (data.length) {
      console.log(`New docs have been saved to ${model.collection.name}`);
    }
  });
};


const loadData = () => {
  const data = [
    { model: Book, docs: books },
    { model: Author, docs: authors }
  ];

  data.forEach(obj => loadDocs(obj.model, obj.docs));
};

module.exports = loadData;
