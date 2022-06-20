function techList(array, nome) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let arrayOrdenado = array.sort();
  let newArray = [];
  for (const iterator of arrayOrdenado) {
    newArray.push({ tech: iterator, name: nome });
  }
  return newArray;
}

module.exports = techList;