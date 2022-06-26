const books = require('./books.js');



// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
function fantasyOrScienceFictionAuthors() {
  return books
  .filter(item => (item.genre === 'Ficção Científica' || item.genre === 'Fantasia'))
  .map(book => book.author.name)
  .sort();
}

console.log(fantasyOrScienceFictionAuthors());
const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];