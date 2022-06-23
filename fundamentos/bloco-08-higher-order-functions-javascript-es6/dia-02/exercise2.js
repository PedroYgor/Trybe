const books = require('./books.js');

function smallerName(arr) {
  let nameBook = arr[0].name;
  arr.forEach((element) => {
    if(element.name.length < nameBook.length) {
      nameBook = element.name;
    }
  });
  return nameBook;
}

console.log(smallerName(books));