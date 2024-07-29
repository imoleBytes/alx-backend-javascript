export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    if (typeof val !== 'number') {
      throw new TypeError('amount is not a number');
    }
    this._amount = val;
  }

  get currency() {
    return this._currency;
  }

  set currency(val) {
    if (typeof val !== 'object') {
      throw new TypeError('currency is not a currency');
    }
    this._currency = val;
  }

  displayFullPrice() {
    const curr = this.currency.displayFullCurrency();
    return `${this.amount} ${curr}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
