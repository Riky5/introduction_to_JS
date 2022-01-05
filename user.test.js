const User = require('./user')

describe('User', () => {
  it('gets the user name', () => {
    user = new User('Uma');
    expect(user.getName()).toEqual('Uma')
  })
  it('gets a full sentence', () => {
    user = new User('Uma');
    expect(user.getIntroduction()).toEqual('Hi, my name is Uma')
  })
})