// 1- Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

let tamanho = 5
let asterisco = '*'
let saida = ''

for (let i = 0; i < tamanho; i++) {
  saida += asterisco
}
for (let i = 0; i < tamanho; i++) {
  console.log(saida)
}

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:
let tamanho2 = 5
let asterisco2 = '*'
let saida2 = ''

for (let i = 0; i < tamanho2; i++) {
  saida2 += asterisco2
  console.log(saida2)
}

/* 
  3- Agora inverta o lado do triângulo. Por exemplo:
  Copiar
  n = 5

     *
    **
   ***
  ****
 *****
*/
let tamanho3 = 5;
let asterisco3 = '*';
let saida3 = '';
let aux = tamanho3
for (let i = 0; i < tamanho3; i++) {
  for (let k = i; k < tamanho3 - 1; k++) {
    saida3 += ' ';
  }
  for (let j = aux - 1; j < tamanho3; j++) {
    saida3 += '*';
  }
  console.log(saida3);
  aux--;
  saida3 = '';
}

//4
/*
  n = 5
      *
     ***
    *****
*/
let tamanho4 = 3
let asterisco4 = '*'
let saida4 = ''
let aux4 = 1
for (let i = 0; i < tamanho4; i++) {
  for (let k = i; k < tamanho4 - 1; k++) {
    saida4 += ' '
  }
  for (let j = 0; j < aux4; j++) {
    saida4 += '*'
  }
  console.log(saida4)
  aux4 += 2
  saida4 = ''
}

// 5- Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
let n = 7;
let tamanho5 = parseInt(n / 2);
let asterisco5 = '*'
let saida5 = ''
let aux5 = parseInt(n / 2);
let espaco = 3;
for (let i = 0; i < tamanho5; i++) {
  for (let k = i; k < tamanho5; k++) {
    saida5 += ' '
  }
  saida5 += asterisco5
  
  for (let j = espaco; j < tamanho5; j++) {
    saida5 += ' '
  }
  if (i !== 0) {
    saida5 += asterisco5;
    espaco--;
  }
  console.log(saida5)
  aux5 += 2
  saida5 = ''
  espaco--;
}
for(let i = 0; i < 7; i++) {
  saida5 += asterisco5;
}
console.log(saida5);

// Faça um programa que diz se um número definido numa variável é primo ou não.
// Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, a divisão dele com quaisquer outros números dá resto diferente de zero.
//6
let isPrime = false;
let numero = 13;
let contador = 0;
for(let i = 2; i <= Math.sqrt(numero); i++) {
  if(numero % i == 0) {
    contador++
  }
}
if(contador == 0) isPrime = true;
console.log(isPrime);