const books = require('./books');
// Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook(arr) {
  return arr.name.length === 26;
}

const resultado = books.find((book) => getNamedBook(book));

console.log(resultado);
