const books = require('./books.js');

function getNamedBook(arr) {
 return arr.name.length === 26;
}

const resultado = books.find(book => getNamedBook(book));

console.log(resultado);