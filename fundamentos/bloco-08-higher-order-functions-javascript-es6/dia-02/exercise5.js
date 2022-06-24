const books = require('./books.js')
// Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

function everyoneWasBornOnSecXX(arr) {
  const twentyCentury =
    arr.author.birthYear >= 1901 && arr.author.birthYear <= 2000
  return twentyCentury
}

const resultado = books.every(book => everyoneWasBornOnSecXX(book))
console.log(resultado)
