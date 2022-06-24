const books = require('./books.js')
// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// // Dica: use a função find.

function authorBornIn1947(arr) {
  return arr.author.birthYear === 1947
}
const resultado = books.find(book => authorBornIn1947(book))

console.log(resultado)
