const myRemove = require('./myRemove.js');

describe('function myRemove()', () => {
  it('if return of array toEqual ', () => {
    expect(myRemove([1, 2, 3], 3)).toEqual([1, 2]);
  })

  it('this not array', () =>{
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })

  it('check if it returns the expected array', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
  })
})