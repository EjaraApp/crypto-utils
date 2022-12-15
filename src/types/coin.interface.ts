import CoinCode from './coin_code';
const WAValidator = require('trezor-address-validator');

export default abstract class Coin {
  constructor(protected _code: CoinCode) {}
  validateAddress(address: string): boolean {
    const valid = WAValidator.validate(address, this.code.toLowerCase());
    if (!valid) return false;
    return valid;
  }

  public get code(): CoinCode {
    return this._code;
  }
}
