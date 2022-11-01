import Coin from '../coin.interface';
var WAValidator = require('multicoin-address-validator');

export default class Stellar implements Coin {
    validateAddress(address: string): boolean {
        var validStellarAddress = WAValidator.validate(address, 'xlm');
        if (!validStellarAddress) return false;
        return validStellarAddress;
  }
}