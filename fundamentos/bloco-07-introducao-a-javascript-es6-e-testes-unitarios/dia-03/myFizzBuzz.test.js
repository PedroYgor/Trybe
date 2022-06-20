const myFizzBuzz = require('./myFizzBuzz.js')

describe('function myFizzBuzz', () => {
  it('if return is "fizzBuzz"', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz')
  })

  it('if return is "fizzBuzz"', () => {
    expect(myFizzBuzz(9)).toEqual('fizz')
  })

  it('if return is "fizzBuzz"', () => {
    expect(myFizzBuzz(10)).toEqual('buzz')
  })

  it('if return is "fizzBuzz"', () => {
    expect(myFizzBuzz(11)).toEqual(11)
  })

  it('if return is "fizzBuzz"', () => {
    expect(myFizzBuzz('d')).toEqual(false)
  })
})