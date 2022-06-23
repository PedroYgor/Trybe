// 1
const setNome = (nome) => ({nome: nome});
const newEmployees = () => {
  const employees = {
    id1: setNome('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: setNome('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: setNome('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const setEmail = (obj) => {
  let keys = Object.keys(obj());
  let objeto = obj();
  let nomePersonalizado;
  let emails = [];
  keys.forEach((element) => {
    nomePersonalizado = objeto[element].nome.replace(' ', '_').toLowerCase();
    emails.push(`${nomePersonalizado}@trybe.com`);
  })
  return emails.join('\n');
};
console.log(setEmail(newEmployees));

// 2
const generateNumber = () => Math.floor(Math.random() * 5 + 1);
const guessNumber = (num, callback) => {
  console.log(num, callback());
  return num === callback() ? 'Parabéns você ganhou' : 'Tente Novamente';

}
console.log(guessNumber(3, generateNumber));

// 3
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studensAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const countAnswers = (rightAnswers, studensAnswers) => {
  let total = 0;
  let count = 0;
  studensAnswers.forEach((element) => {
    if (element === 'N.A'){}
    else if (element === rightAnswers[count]) total += 1;
    else total -= 0.5;
    count += 1;
  })
  return total;
}
const checkAnswers = (rightAnswers, studensAnswers, callback) => {
  let result = callback(rightAnswers, studensAnswers);
  if(result < 0) return 0;
  return result;
};

console.log(checkAnswers(rightAnswers, studensAnswers, countAnswers));