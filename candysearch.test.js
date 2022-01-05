const searchCandies = require('./candysearch')

describe('searchCandies', () => {
  it('filters by the start of the string and price', () => {
    expect(searchCandies('Sk', 3)).toEqual(['Skitties', 'Skittles'])
  })
})
