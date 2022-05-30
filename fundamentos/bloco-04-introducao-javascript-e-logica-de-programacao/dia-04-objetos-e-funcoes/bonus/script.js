let numeros = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 100,
}
//  let palavra = 'iv';

// console.log(palavra[palavra.length -1]);
// let numRomano = "IV";

function converteRomanos(string) {
  let num = 0;
  let total = 0
  // if(string.length % 2 !== 0 && numeros[string.length - 1] < numeros[string.length - 2]) {
  //   total +=numeros[`${string[string.length - 1].toUpperCase()}`].valueOf();
  // }
  string = string.slice(0, string.length -1);
  for(let i = 0; i < string.length - 1; i+=1 ) {
    if(numeros[`${string[i].toUpperCase()}`].valueOf() >= numeros[`${string[i+1].toUpperCase()}`].valueOf()){
      num += numeros[`${string[i].toUpperCase()}`].valueOf() + numeros[`${string[i+1].toUpperCase()}`].valueOf();
    }else {
      num = numeros[`${string[i+1].toUpperCase()}`].valueOf() - numeros[`${string[i].toUpperCase()}`].valueOf();
    }
    
    total += num;
    num = 0
  }
  return total;
}
console.log(converteRomanos('x'));