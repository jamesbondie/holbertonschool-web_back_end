import Currency from "./3-currency";

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  displayFullPrice() {
    return (`${this.amount} ${this.currency.name} (${this.currency.code})`);
  }

  static convertPrice(amount, conversionRate) {
		return amount * conversionRate;
	}


  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(amount) {
    return this._amount = amount;
  }

  set currency(currency) {
    return this._currency = currency;
  }

}
