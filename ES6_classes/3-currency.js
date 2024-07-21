export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;

  }

  displayFullCurrent() {
    return `${this._name} (${this._code})`;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(code) {
    return this._code = code;
  }

  set name(name) {
    return this._name = name;
  }

}