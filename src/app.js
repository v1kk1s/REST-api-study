const express = require('express');
const mongoose = require('mongoose');

// bookAPI -> name of db to connect to
const db = mongoose.connect('mongodb://localhost/bookAPI');
const Book = require('./models/bookModel');

const app = express();
const port = process.env.PORT || 3000;

const bookRouter = express.Router();
bookRouter.route('/Books')
  .get((req, res) => {
    let query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }

    Book.find(query, (err, books) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(books);
      }
    });
  });

bookRouter.route('/Books/:bookId')
  .get((req, res) => {
    Book.findById(req.params.bookId, (err, book) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(book);
      }
    });
  });

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('hello rest');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
