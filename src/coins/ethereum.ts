import Coin from '../coin.interface';
const WAValidator = require('trezor-address-validator');

export default class Ethereum implements Coin {
  validateAddress(address: string): boolean {
    const validEthereumAddress = WAValidator.validate(address, 'eth');
    if (!validEthereumAddress) return false;
    return validEthereumAddress;
  }
}
