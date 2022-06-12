const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
// 1
const novoAtributo = (obj, chave, valor) =>  obj[chave] = valor;
novoAtributo(lesson2, 'turno', 'noite');

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
// 2
const listarKeys = (obj) => Object.keys(obj);
listarKeys(lesson3)

// Crie uma função para mostrar o tamanho de um objeto.
// 3
const tamanhoObjeto = (obj) => Object.keys(obj).length;
tamanhoObjeto(lesson3)

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
// 4
const valorObjeto = (obj) => Object.values(obj);
// console.log(valorObjeto(lesson3));

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
// 5
const allLessons =  Object.assign({}, {lesson1, lesson2, lesson3});
// console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
// 6
const totalDeEstudantes = () => {
  let total = 0;
  for (const key in allLessons) {
    total += allLessons[key]['numeroEstudantes']
  }
  return total;
};
// console.log(totalDeEstudantes());

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
// 7
const pegarValorPorNumero = (obj, posicao) => {
  const posicoesIvalidas = posicao > Object.keys(obj).length || posicao < 0;
  if(posicoesIvalidas) return 'Posição Não Encontrada';
  const keys = Object.keys(obj);
  return obj[keys[posicao]];
}
// console.log(pegarValorPorNumero(lesson1, 0));
// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
// 8
const verificaPares = (obj, chave, valor) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  for (let index = 0; index < keys.length; index += 1) {
    if (keys[index] === chave && values[index] === valor) return true;
  }
  return false;
};

console.log(verificaPares(lesson3, 'turno', 'noite'));
// console.log(Object.entries);
