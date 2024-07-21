import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof this._amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = amount;
    if (!(this._currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(data) {
    if (typeof data !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = data;
  }

  set currency(data) {
    if (!(data instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the Currency class');
    }
    this._currency = data;
  }

}
