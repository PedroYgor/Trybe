const books = require('./books.js');

function booksOrderedByReleaseYearDesc(a, b) {
  if (a.releaseYear > b.releaseYear) return 1;
  if (a.releaseYear < b.releaseYear) return -1;
  return 0;
}

const resultado = books.sort((a, b) => booksOrderedByReleaseYearDesc(a, b));
console.log(resultado);