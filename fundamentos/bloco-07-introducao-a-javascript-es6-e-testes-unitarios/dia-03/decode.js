function decode(str) {
  let newStr = str;
  newStr = newStr.replace(/[1]/g, 'a');
  newStr = newStr.replace(/[2]/g, 'e');
  newStr = newStr.replace(/[3]/g, 'i');
  newStr = newStr.replace(/[4]/g, 'o');
  newStr = newStr.replace(/[5]/g, 'u');
  return newStr;
}

