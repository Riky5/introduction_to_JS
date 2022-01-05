const Candy = require('../lib/candy')

describe('Candy', () => {
  it('gets the name of a candy', () => {
    let candy = new Candy('Mars', 4.99);
    expect(candy.getName()).toEqual('Mars')
  })
  it('gets the price of a candy', () => {
    let candy = new Candy('Mars', 4.99);
    expect(candy.getPrice()).toEqual(4.99)
  })
})