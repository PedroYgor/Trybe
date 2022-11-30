const bookService = require('../services/booksServices');

const errorMessage = 'Algo deu errado';

const getAllBooks = async (_req, res) => {
 try {
    const books = await bookService.getAll();
    res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(errorMessage);
  }
};

const getBooksById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookService.getById(Number(id));
    
    if(book.type) {
      return res.status(404).json(book.message);
    }

    res.status(200).json(book.message);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(errorMessage);
  }
};

const createNewBook = async (req, res) => {
  
  try{
    const { title, author, pageQuantity } = req.body;
    const newBook = await bookService.createBook(title, author, pageQuantity);

    res.status(201).json(newBook);
  } catch (error) {
    console.log(error.message);
    res.status(404).json(errorMessage);
  }
}

module.exports = {
  getAllBooks,
  getBooksById,
  createNewBook,
}