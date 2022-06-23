const books = require('./books.js');

function authorBornIn1947(arr) {
  return arr.author.birthYear === 1947;
}
const resultado = books.find( book => authorBornIn1947(book) );

console.log(resultado);