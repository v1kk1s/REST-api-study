const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// bookAPI -> name of db to connect to
const db = mongoose.connect('mongodb://localhost/bookAPI');
const Book = require('./models/bookModel');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);

app.get('/', (req, res) => {
  res.send('hello rest');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
