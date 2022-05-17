// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function verificaPalindromo(palavra) {
  let inverso = ''
  inverso = palavra.split('').reverse().join('')
  return palavra === inverso ? true : false
}

console.log(isPalindromo('ana'))

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
function maiorValor(array) {
  let maior = array[0]
  let index = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
      index = i
    }
  }
  return index
}
let a = [3, 4, 55, 6, 100]
console.log(maiorValor(a));

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
function menorValor(array) {
  let menor = array[0]
  let index = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] < menor) {
      menor = array[i]
      index = i
    }
  }
  return index
}
let b = [3, 4, 55, 6, 100, 1]
console.log(menorValor(b));


// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
let teste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maiorPalavra(array) {
  let palavra = '';
  for (let i = 0; i < array.length; i++) {
    if(array[i].length > palavra.length) {
      palavra = array[i];
    }
  }
  return palavra;
}
console.log(maiorPalavra(teste));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
let t = [2, 3, 2, 5, 8, 2, 3, 3, 3];
function numeroRepetido (array) {
  let contador = 0;
  let repetido = 0;
  let aux = 0;
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      if(array[i] === array[j]) {
        contador++
      }
    }
    if(contador > aux) {
      repetido = array[i];
      aux = contador;
    }
    contador = 0;
  }
  return repetido;
}

console.log(numeroRepetido(t));

//6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
function somatorio(num) {
  if(num <= 0) return `Número não positivo`;
  let soma = 0;
  for(let i = 1; i <= num; i++){
    soma += i;
  }
  return soma;
}
console.log(somatorio(5));

//7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

function verificaFimPalavra(word, ending){
  if(word.length < ending.length) return `Palavra muito pequena`;
  let tamanho = ending.length;
  let substr = word.slice(-tamanho);
  if(ending === substr) return true;
  return false; 
}

console.log(verificaFimPalavra('trybe', 'be'));