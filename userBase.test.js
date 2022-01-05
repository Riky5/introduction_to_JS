const UserBase = require('./userBase')
const User = require('./user')

describe('UserBase', () => {
  it('returns the number of users', () => {
    const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
    ];
    const groupBase = new UserBase(users);
    expect(groupBase.count()).toEqual(3)
  })
  it('returns the names of the users', () => {
    const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
    ];
    const groupBase = new UserBase(users);
    expect(groupBase.getNames()).toEqual([ 'Uma', 'Josh', 'Ollie' ])
  })
  it('returns the introduction of each user', () => {
    const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
    ];
    const groupBase = new UserBase(users);
    expect(groupBase.getIntroductions()).toEqual([
      'Hi, my name is Uma',
      'Hi, my name is Josh',
      'Hi, my name is Ollie'
    ])
  })
})