const books = require('./books.js');
// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
function someBookWasReleaseOnThe80s(arr) {
  const eighties = arr.releaseYear >= 1980 && arr.releaseYear <= 1989;
  return eighties;
}

const resultado = books.some(book => someBookWasReleaseOnThe80s(book));
console.log(resultado);