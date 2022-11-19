import Coin from '../coin.interface';
const WAValidator = require('multicoin-address-validator');

export default class Stellar implements Coin {
  validateAddress(address: string): boolean {
    const validStellarAddress = WAValidator.validate(address, 'xlm');
    if (!validStellarAddress) return false;
    return validStellarAddress;
  }
}
