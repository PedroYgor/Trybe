const setNome = (nome) => ({nome: nome});
const newEmployees = () => {
  const employees = {
    id1: setNome('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: setNome('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: setNome('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
const obj = newEmployees();
console.log(obj.id1.nome);
console.log(obj.id2.nome);
console.log(obj.id3.nome);