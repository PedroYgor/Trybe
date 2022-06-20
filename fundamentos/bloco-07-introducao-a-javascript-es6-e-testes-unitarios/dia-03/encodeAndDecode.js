function encode(str) {
  let newStr = str;
  newStr = newStr.replace(/a/g, 1);
  newStr = newStr.replace(/e/g, 2);
  newStr = newStr.replace(/i/g, 3);
  newStr = newStr.replace(/o/g, 4);
  newStr = newStr.replace(/u/g, 5);
 
  return newStr;
}

function decode(str) {
  let newStr = str;
  newStr = newStr.replace(/[1]/g, 'a');
  newStr = newStr.replace(/[2]/g, 'e');
  newStr = newStr.replace(/[3]/g, 'i');
  newStr = newStr.replace(/[4]/g, 'o');
  newStr = newStr.replace(/[5]/g, 'u');
  return newStr;
}
module.exports = {encode, decode};