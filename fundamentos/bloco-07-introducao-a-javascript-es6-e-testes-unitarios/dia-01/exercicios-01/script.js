// 🚀 Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function.
// Modifique as concatenações para template literals.
// Copie o código abaixo.
// 1
function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    return console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    return console.log(elseScope);
  }
}

testingScope(true);

// 🚀 Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o métodoarray.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.
// 2
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const ordenarNumero = (a, b) => a - b; 
console.log(oddsAndEvens.sort(ordenarNumero)); // será necessário alterar essa linha 😉