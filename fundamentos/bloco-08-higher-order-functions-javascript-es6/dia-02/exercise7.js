// const books = require('./books.js');
const books = require('./books.js');
// Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.


function authorUnique () {
  return books.every(ele1 => 
    !books.some(ele2 => 
      (ele1.author.birthYear === ele2.author.birthYear && 
      ele1.author.name !== ele2.author.name) 
  ))
}

console.log(authorUnique());

