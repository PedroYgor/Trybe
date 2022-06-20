const {encode, decode} = require('./encodeAndDecode.js');
describe('function encode()', () => {
  it('if the string return is correct if contain "a"', () => {
    expect(encode('say')).toEqual('s1y')
  })

  it('if the string return is correct if contain "e"', () => {
    expect(encode('hell')).toEqual('h2ll')
  })

  it('if the string return is correct if contain "i"', () => {
    expect(encode('i will')).toEqual('3 w3ll')
  })
  
  it('if the string return is correct if contain "o"', () => {
    expect(encode('school')).toEqual('sch44l')
  })

  it('if the string return is correct if contain "u"', () => {
    expect(encode('full stack')).toEqual('f5ll st1ck')
  })

  it('if the length of the parameter string is the same as the length of the return', () =>{
    const palavra = {
      str: 'Jonh Doe',
      sizeF: encode('John Doe').length,
    }
    expect(palavra.str.length).toBe(palavra.sizeF);
  })
})

describe('function decode()', () => {
  it('if the string return is correct if contain "1"', () => {
    expect(decode('s1y')).toEqual('say')
  })

  it('if the string return is correct if contain "2"', () => {
    expect(decode('h2ll')).toEqual('hell')
  })

  it('if the string return is correct if contain "3"', () => {
    expect(decode('3 w3ll')).toEqual('i will')
  })

  it('if the string return is correct if contain "4"', () => {
    expect(decode('sch44l')).toEqual('school')
  })

  it('if the string return is correct if contain "5"', () => {
    expect(decode('f5ll st1ck')).toEqual('full stack')
  })
})