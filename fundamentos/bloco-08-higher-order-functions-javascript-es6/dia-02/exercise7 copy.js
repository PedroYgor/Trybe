// const books = require('./books.js');
const books = require('./books.js')
// Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

// const expectedResult = false;

function authorUnique(arr, element1) {
  let aux = false
  const array = []
  arr.forEach(element2 => {
    if (element1 !== element2) {
      if (element1.author.birthYear === element2.author.birthYear) {
        aux = true
      }
    }
  })
  return aux
}

const resultado = books.filter(item => (authorUnique(books, item) ? item : ''))
// console.log(resultado.filter(item => item))
console.log(resultado)

// console.log(resultado.filter(item => item.length !== 0))
