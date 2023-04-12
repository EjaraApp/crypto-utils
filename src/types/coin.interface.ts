import CoinCode from './coin_code';
const WAValidator = require('trezor-address-validator');

export default abstract class Coin {
  constructor(protected _code: CoinCode) {}
  validateAddress(address: string): boolean {
    const valid = WAValidator.validate(address, this.code.toLowerCase());
    return valid;
  }

  validateAddressNumeric(address: string): number {
    return this.validateAddress(address) ? 100 : 0;
  }

  public get code(): CoinCode {
    return this._code;
  }
}
