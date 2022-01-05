class ShoppingBasket {
  constructor() {
    this.basketArray = []
  }

  getTotalPrice = () => {
    let totalPrice =  this.basketArray.map(candy => {
        return candy.price;
      }
    );


    let sum = 0;
    for (let i=0; i < totalPrice.length; i++) {
      if (totalPrice.length === 0) {
        sum;
      } else {
        sum += totalPrice[i];
      }
    }
    return sum;
  }

  addItem = (candy) => {
    this.basketArray.push(candy);
  }
}
module.exports = ShoppingBasket


