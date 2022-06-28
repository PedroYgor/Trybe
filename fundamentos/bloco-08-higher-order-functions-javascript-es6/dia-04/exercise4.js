const books = require('./books');
// Encontre o livro com o maior nome.


const expectedResult = {
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  genre: 'Fantasia',
  author: {
    name: 'George R. R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  return books.reduce((acc, current) => {
    if(acc.name.length < current.name.length) {
      return current;
    } return acc;
  })
}

console.log(longestNamedBook());