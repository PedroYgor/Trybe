const books = require('./books.js');
const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];
// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
function oldBooks() {
  return books.filter(item => {
    let currentYear = new Date();
    let year = currentYear.getFullYear();
    let bookAge = year - item.releaseYear;
    return bookAge > 60;
  }).map(book => book.name);
}

console.log(oldBooks());