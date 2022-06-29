// Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

function sum (...args) {
  const sum = args.reduce((acc, current) => acc + current, 0)
  return sum;
}

console.log(sum(1, 3, 4, 5));
