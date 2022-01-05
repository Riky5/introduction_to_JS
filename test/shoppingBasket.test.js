const ShoppingBasket = require('../lib/shoppingBasket')
const Candy = require('../lib/candy')

describe('ShoppingBasket', () => {
  it('gets the total price', () => {
    let basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toEqual(0)
  })
  it('adds a candy to the basket', () => {
    let basket = new ShoppingBasket();
    let candyDouble = { candy: 'Mars' };
    basket.addItem(candyDouble);
    expect(basket.basketArray.length).toEqual(1);
  })
  it('gets the total price of many candies', () => {
    let basket = new ShoppingBasket();
    basket.addItem(new Candy('Mars', 4.99));
    basket.addItem(new Candy('Skittle', 3.99));
    expect(basket.getTotalPrice()).toEqual(8.98)
  })
})