import Coin from '../coin.interface';
const WAValidator = require('trezor-address-validator');

export default class Tron implements Coin {
  validateAddress(address: string): boolean {
    const validTronAddress = WAValidator.validate(address, 'trx');
    if (!validTronAddress) return false;
    return validTronAddress;
  }
}
