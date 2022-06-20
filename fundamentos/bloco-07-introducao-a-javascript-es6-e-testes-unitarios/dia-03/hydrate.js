function pegarNumerosEmString(str) {
  let reg = /\d+/g;
  let strNumbers = str.match(reg);
  let total = 0;
  for (const iterator of strNumbers) {
    total += parseInt(iterator, 10);
  }
  return total;
}

function hydrate(str) {
  let total = pegarNumerosEmString(str);
  if (total === 1) {
    return `${total} copo de água`;
  }
  return `${total} copos de água`;
}

module.exports = hydrate;