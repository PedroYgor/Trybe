//Crie um programa que retorne o fatorial de 10
// 1
let resultado = 1;
for (let index = 10; index > 1; index--) {
    resultado *= index;
}
console.log(resultado);

// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let palavra = 'tryber';
let palavraInvertida = palavra.split("").reverse().join("");
console.log(palavraInvertida);


// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigWord = array[0];
let smallWord = array[0];
for(let i = 0; i < array.length; i++){
  if(bigWord.length < array[i].length){
    bigWord = array[i];
  }
  if(smallWord.length > array[i].length){
    smallWord = array[i];
  }
}
console.log(bigWord, smallWord);

// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let contador = 0;
let primo = 2;
for(let i = 3; i <= 50; i++){
  for(let j = 1; j <= Math.sqrt(i); j++){
    if(i%j == 0) contador++;
    
  }
  if (contador == 1) primo = i;
  contador = 0;
}
console.log(primo);