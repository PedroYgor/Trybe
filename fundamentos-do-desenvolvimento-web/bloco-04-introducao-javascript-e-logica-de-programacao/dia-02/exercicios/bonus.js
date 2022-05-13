let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

//Ordene o array numbers em ordem crescente e imprima seus valores;
// 1

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[i] < numbers[j]) {
      let aux = numbers[j]
      numbers[j] = numbers[i]
      numbers[i] = aux
    }
  }
}

for (const iterator of numbers) {
  console.log(iterator)
}

//Ordene o array numbers em ordem decrescente e imprima seus valores;
// 2
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[i] > numbers[j]) {
      let aux = numbers[j]
      numbers[j] = numbers[i]
      numbers[i] = aux
    }
  }
}

for (const iterator of numbers) {
  console.log(iterator)
}

//Agora crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo: [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; 
let array = [];
for (let index = 0; index < (numbers.length - 1); index++) {
  array.push(numbers[index] * numbers[index+1]);
}
array.push(numbers[numbers.length - 1] * 2);

for (const iterator of array) {
  console.log(iterator);
}