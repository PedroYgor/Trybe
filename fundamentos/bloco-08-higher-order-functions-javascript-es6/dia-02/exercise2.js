const books = require('./books');
// Retorne o nome do livro de menor nome.
// Dica: use a função forEach.

function smallerName(arr) {
  let nameBook = arr[0].name;
  arr.forEach((element) => {
    if (element.name.length < nameBook.length) {
      nameBook = element.name;
    }
  });
  return nameBook;
}

console.log(smallerName(books));
