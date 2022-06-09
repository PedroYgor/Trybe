// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.
// 1
const fatorial = number => number === 1 ? number : number * fatorial(number - 1) ;
console.log(fatorial(5));

// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:
// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

const maiorPalavra = (frase) => {
  let palavras = frase.split(' ');
  // return palavras.sort((a, b) => b.length - a.length)[0]; <- Funciona também, porém achei complexa pra quem tá lendo entender
  return palavras.reduce((acumulador, valorAtual) => acumulador.length < valorAtual.length ? acumulador = valorAtual : acumulador);
};
console.log(maiorPalavra('Antônio foi no banheirooooo e não sabemos o que aconteceu'));


// Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string.
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS, nesse caso, contendo cinco strings com suas principais skills.
const skills = ['HTML', 'CSS', 'JavaScript', 'Git', ':)']
const string = 'Tryber x aqui!';

const mudaPalavra = palavra => string.replace('x', palavra);
// console.log(mudaPalavra('Bebeto'));
const ordemAlfabetica = (f) => {
  let retorno = f;
  let skillsOrdenada = skills.sort();
  return `${retorno}
Minhas cinco habilidades são:
  ${skillsOrdenada[0]}
  ${skillsOrdenada[1]}
  ${skillsOrdenada[2]}
  ${skillsOrdenada[3]}
  ${skillsOrdenada[4]}`;
};

console.log(ordemAlfabetica(mudaPalavra('Bebeto')));