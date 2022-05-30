let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
// 1
for (const iterator of numbers) {
  console.log(iterator);
}

// 2 -Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// 2, 3 e 4
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (const iterator of numbers) {
  soma += iterator;
}
let valor = soma / numbers.length;
console.log(soma);

valor > 20 ? console.log("valor maior que 20") : console.log("valor maior que 20");

//  Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// 5
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
for (let index = 0; index < numbers.length; index++) {
  if(numbers[index] > maior) {
    maior = numbers[index];
  }
}
console.log(maior);

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// 6
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let vlrImpar = 0;
for (let index = 0; index < numbers.length; index++) {
  if(numbers[index] % 2 !== 0) {
    vlrImpar++;
  }
}
console.log(vlrImpar);

//Utilizando for, descubra qual o menor valor contido no array e imprima-o;
// 7
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 1000;
for (let index = 0; index < numbers.length; index++) {
  if(numbers[index] < menor) {
    menor = numbers[index];
  }
}
console.log(menor);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
//8
let array = [];
for (let index = 1; index <= 25; index++) {
  array.push(index);
}
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
//9
let resultadoDivisao = 0;
for (let index = 0; index < array.length; index++) {
  resultadoDivisao = array[index] / 2;
  console.log(resultadoDivisao);
}