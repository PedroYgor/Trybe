// const books = require('./books.js');
const books = require('./books.js');
// Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

// const expectedResult = false;

function authorUnique(arr, element1) {
  let aux = false;
  arr.forEach(element2 => {
    if(element1 !== element2) {
      if(element1.releaseYear === element2.releaseYear) {
        aux = true;
      }
    } 
  });
  return aux;
}
const resultado = books.some((element1) => authorUnique(books, element1));
console.log(resultado);

