import Coin from '../coin.interface';
const WAValidator = require('@capitual/api-crypto-address-validator');

export default class Binance implements Coin {
  validateAddress(address: string): boolean {
    const validBinanceAddress = WAValidator.validate(address, 'bnb');
    if (!validBinanceAddress) return false;
    return validBinanceAddress;
  }
}
