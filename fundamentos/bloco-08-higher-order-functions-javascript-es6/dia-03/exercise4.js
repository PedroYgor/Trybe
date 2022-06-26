const books = require('./books')

const expectedResult = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  }
]
// Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
// Dica: use as funções filter e sort
function oldBooksOrdered() {
  return books
    .filter(item => {
      let currentYear = new Date()
      let year = currentYear.getFullYear()
      let bookAge = year - item.releaseYear
      return bookAge > 60
    })
    .sort((bookA, bookB) => {
      if (bookA.releaseYear < bookB.releaseYear) return -1
      if (bookA.releaseYear > bookB.releaseYear) return 1
      return 0
    })
}

console.log(oldBooksOrdered())

module.exports = oldBooksOrdered
