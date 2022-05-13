/* 
  Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
  Adição (a + b)
  Subtração (a - b)
  Multiplicação (a * b)
  Divisão (a / b)
  Módulo (a % b)
  *Dica: Neste link você encontra mais detalhes sobre operadores matemáticos 😉
*/
// 1

let a = 5
let b = 10

let soma = a + b
let subtracao = a - b
let multiplicacao = a * b
let divisao = a / b
let modulo = a % b

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
// 2
let x = 4
let y = 6
if (x >= y) console.log(x)
else console.log(y)

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
// 3
let num1 = 100
let num2 = 1005
let num3 = 200

if (num1 >= num2 && num1 >= num3) console.log(num1)
else if (num2 >= num1 && num2 >= num3) console.log(num2)
else console.log(num3)

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
//4
const vlr = 3
if (vlr > 0) console.log('positive')
else if (vlr < 0) console.log('negative')
else console.log('Você digitou zero :/')

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//5

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) console.log('Valor inválido')
else if (somaAngulo == 180) console.log(true)
else console.log(false)

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//5 //Alternativo
const angulo1 = 30
const angulo2 = 60
const angulo3 = 90
let somaAngulo = angulo1 + angulo2 + angulo3
if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) console.log('Valor inválido')
else {
  switch (somaAngulo) {
    case 180:
      console.log(true)
      break

    default:
      console.log(false)
      break
  }
}

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)
// 6
let peca = 'CAVALO'
switch (peca.toLowerCase()) {
  case 'cavalo':
    console.log('Em L')
    break

  case 'bispo':
    console.log('Em diagonal')
    break

  case 'torre':
    console.log('Em linha reta')
    break

  case 'rainha':
    console.log('Em linha reta e diagonal')
    break

  case 'rei':
    console.log('andar uma casa em qualquer direção')
    break

  case 'pião':
    console.log('anda uma casa para frente')
    break

  default:
    console.log('peça passada inválida')
    break
}
// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
// 7
let nota = 120
if (nota < 0 || nota > 100) console.log('Nota Inválida')
else if (nota >= 90) console.log('A')
else if (nota >= 80) console.log('B')
else if (nota >= 70) console.log('C')
else if (nota >= 60) console.log('D')
else if (nota >= 50) console.log('E')
else console.log('F')

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
// Bonus: use somente um if.
//8
const numero1 = 8
const numero2 = 1
const numero3 = 3

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0)
  console.log(true)
else console.log(false)

// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar.   Caso contrário, ele retorna false.
// Bonus: use somente um if.
//9
const number1 = 8
const number2 = 2
const number3 = 2

if (number1 % 2 !== 0 || number2 % 2 !== 0 || number3 % 2 !== 0)
  console.log(true)
else console.log(false)

// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)
// 10
const imposto = 0.2
const custoProduto = 100
const valorVenda = 150
const valorCustoTotal = custoProduto + custoProduto * imposto
const lucro = valorVenda - valorCustoTotal
const resultado = lucro
console.log(resultado)

// Questão 11
let salarioBruto = 3000.0
let salarioLiquido = 0

const ALIQUOTA_INSS_1 = salarioBruto * 0.08
const ALIQUOTA_INSS_2 = salarioBruto * 0.09
const ALIQUOTA_INSS_3 = salarioBruto * 0.11
const ALIQUOTA_INSS_4 = salarioBruto - 570.88

if (salarioBruto < 1556.94 && salarioBruto > 0) {
  salarioLiquido = salarioBruto - ALIQUOTA_INSS_1
}
else if (salarioBruto >= 1556.94 && salarioBruto <= 2594.92) {
  salarioLiquido = salarioBruto - ALIQUOTA_INSS_2
} 
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salarioLiquido = salarioBruto - ALIQUOTA_INSS_3
} 
else if (salarioBruto > 5189.82) {
  salarioLiquido = salarioBruto - ALIQUOTA_INSS_4
} 
else console.log('Valor Inválido')

const IR_1 = salarioLiquido * 0.075 - 142.8
const IR_2 = salarioLiquido * 0.15 - 354.8
const IR_3 = salarioLiquido * 0.225 - 636.13
const IR_4 = salarioLiquido * 0.275 - 869.36

if (salarioLiquido <= 1903.98) console.log(`Seu Salário é ${salarioLiquido}`)
else if (salarioLiquido > 1903.98 && salarioLiquido <= 2826.65) {
  salarioLiquido -= IR_1
  console.log(`Seu Salário é ${salarioLiquido}`)
} else if (salarioLiquido > 2826.65 && salarioLiquido <= 3751.05) {
  salarioLiquido -= IR_2
  console.log(`Seu Salário é ${salarioLiquido}`)
} else if (salarioLiquido > 3751.05 && salarioLiquido <= 4664.68) {
  salarioLiquido -= IR_3
  console.log(`Seu Salário é ${salarioLiquido}`)
} else if (salarioLiquido > 4664.68) {
  salarioLiquido -= IR_4
  console.log(`Seu Salário é ${salarioLiquido}`)
}
