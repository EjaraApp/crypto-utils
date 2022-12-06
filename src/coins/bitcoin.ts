import Coin from '../coin.interface';
const WAValidator = require('trezor-address-validator');

export default class Bitcoin implements Coin {
  validateAddress(address: string): boolean {
    const validBitcoinAddress = WAValidator.validate(address, 'btc');
    if (!validBitcoinAddress) return false;
    return validBitcoinAddress;
  }
}
