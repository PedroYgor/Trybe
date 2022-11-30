const express = require('express');

const booksController = require('./controllers/booksController');

const app = express();

app.use(express.json());

app.get('/books', booksController.getAllBooks);
app.get('/books/:id', booksController.getBooksById);
app.post('/books/', booksController.createNewBook);

module.exports = app;