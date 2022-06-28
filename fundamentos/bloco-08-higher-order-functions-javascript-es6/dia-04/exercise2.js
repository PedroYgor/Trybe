const books = require('./books');

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return books
  .reduce((acc, current) => {
    acc.push(current.author.name);
    return acc;
  }, [])
  .join(', ')
  .concat('.');
} 

console.log(reduceNames());