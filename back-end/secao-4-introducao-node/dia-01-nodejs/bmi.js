const readline = require('readline-sync')

const bmj = (weight, height) => {
  const result = weight / height ** 2
  return result;
}; 

const main = () => {
  const weight = readline.questionFloat(`What' your weight? `)
  const height = readline.questionFloat(`What' your height? `)
  const result = bmj(weight, height)
  let situation = '';
  if(result < 18.5) situation = 'Abaixo do peso (magreza)'
  else if(result < 24.9) situation = 'Peso normal'
  else if(result < 34.9) situation = 'Obesidade grau I'
  else if(result < 39.9) situation = 'Obesidade grau II'
  else situation = 'Obesidade grau III e IV'
  
  return console.log(`IMC: ${result.toFixed(2)}, Situação: ${situation}`);
}

main()

