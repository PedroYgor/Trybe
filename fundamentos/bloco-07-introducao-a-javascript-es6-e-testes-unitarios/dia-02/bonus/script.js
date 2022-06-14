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

// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
// 1
const allLessons =  Object.assign({}, {lesson1, lesson2, lesson3});
function AlunosAulaMatematica () {
  let numeroDeAlunos = 0;
  for (const key in allLessons) {
    if(allLessons[key].materia === 'Matemática') {
      numeroDeAlunos += allLessons[key].numeroEstudantes;
    }
  }
  console.log(numeroDeAlunos);
}

// AlunosAulaMatematica();

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
// 2
function criarRelatorio (professor, aulas, estudantes) {
  return {
    professor: professor,
    aulas: aulas, 
    estudantes: estudantes 
  }
}

function relatorio(obj, professor) {
  const aulas = [];
  let numeroDeAlunos = 0;
  for (const key in obj) {
    if(obj[key].professor === professor) {
      aulas.push(obj[key].materia);
      numeroDeAlunos += obj[key].numeroEstudantes;
    }
  }
  if (aulas.length !== 0) {
    const relatorio = criarRelatorio(professor, aulas, numeroDeAlunos);
    return console.log(relatorio);
  }
  return console.log('professor não encontrado');
}

relatorio(allLessons, 'Maria Clara');