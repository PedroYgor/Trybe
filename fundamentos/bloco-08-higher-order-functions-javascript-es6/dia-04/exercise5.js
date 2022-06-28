const books = require('./books');
// Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
// const regex = /[a]/gi;
// console.log(names.match(regex));

function containsA() {
  const regex = /[a]/gi;
  return names.reduce((acc, current) => acc + current.match(regex).length, 0)
}
console.log(containsA());