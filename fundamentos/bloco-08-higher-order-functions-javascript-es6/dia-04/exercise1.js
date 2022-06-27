// Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(acumulador, valorAtual) {
  acumulador.push(...valorAtual);
  return acumulador;
}
console.log(arrays.reduce(flatten));