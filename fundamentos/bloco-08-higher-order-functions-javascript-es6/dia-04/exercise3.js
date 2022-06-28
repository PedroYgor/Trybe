const books = require('./books');
// Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
const expectedResult = 43;

function averageAge() {
  return books.reduce((acc, current) => {
    const {birthYear} = current.author;
    const {releaseYear} = current;
    acc += (releaseYear - birthYear) / books.length;
    return acc;
  }, 0).toPrecision(2)
}

console.log(averageAge());