const sum = require('./sum.js');

describe('function sum()', () => {
  it('verify if 4 + 5 to equals 9', () => {
    expect(sum(4, 5)).toBe(9)
  })

  it('verify if 0 + 0 to equals 0', () => {
    expect(sum(0, 0)).toBe(0)
  })

  it('verify if return throw new error', () => {
    expect(() => { sum(1, '5') }).toThrow();
  })

  it('verify if message of throw new to equals new Error("parameters must be numbers")', () => {
    expect(() => {sum('5', 3)}).toThrowError(new Error('parameters must be numbers'))
  })
});