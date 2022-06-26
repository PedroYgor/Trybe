const books = require('./books.js')
// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
// Dica: cada inicial termina com um ponto.

const expectedResult = 'O Senhor dos Anéis'
const regex = /[a-z](\.)\s[a-z](\.)\s[a-z](\.)/i
function authorWith3DotsOnName() {
  return books
    .filter(book => regex.test(book.author.name))
    .map(book => book.name)
}
console.log(authorWith3DotsOnName())
